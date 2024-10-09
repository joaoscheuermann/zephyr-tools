import {Command, Flags} from '@oclif/core'
import chalk from 'chalk'
import Mustache from 'mustache'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import {parse} from 'yaml'

import * as Zephyr from '../../api/zephyr/index.js'
import {LocalTestPlan, ZephyrFolder, ZephyrTestPlan} from '../../types/index.js'
import * as utils from '../../utils/index.js'
import {readLocalDataFile} from '../../utils/index.js'

export default class BulkCreate extends Command {
  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    file: Flags.string({char: 'f', required: true}),
    type: Flags.string({
      char: 't',
      description: 'Type of bulk create',
      options: ['test-case', 'test-cycle'],
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const context: Record<string, ZephyrTestPlan> = {}

    const {flags} = await this.parse(BulkCreate)

    const localData = readLocalDataFile()

    const atlassianUserId = localData?.atlassian?.account?.accountId
    const zephyrToken = localData?.zephyr?.token
    const zephyrProjectKey = localData?.zephyr?.project?.key

    assert(atlassianUserId)
    assert(zephyrToken)
    assert(zephyrProjectKey)

    this.log('::: Bulk create starting! :::')

    const tests = await utils.spinner(
      'Parsing file...',
      'Successfully parsed file!',
      'Failed to parse file.',
      async () => {
        const target = path.resolve(process.cwd(), flags.file)
        const text = fs.readFileSync(target, 'utf8')
        return parse(text).tests as LocalTestPlan[]
      },
    )

    const folders = await utils.spinner(
      'Fetching folders...',
      'Successfully fetched folders!',
      'Failed to fetch folders.',
      () =>
        Zephyr.fetchAllRegisters<ZephyrFolder>(
          (startAt, maxResults) => Zephyr.getFolders(zephyrToken, zephyrProjectKey, startAt, maxResults),
          0,
          25,
        ),
    )

    for (const test of tests) {
      const folder = folders.find((f) => f.name === test.folder)

      if (!folder) {
        throw new Error(`Folder ${test.folder} not found`)
      }

      // eslint-disable-next-line no-await-in-loop
      const testCase = await utils.spinner(
        `Creating test case: ${chalk.magenta(test.name)}`,
        `Successfully created test case: ${chalk.magenta(test.name)}!`,
        `Failed to create test case: ${chalk.magenta(test.name)}`,
        () =>
          utils.json<ZephyrTestPlan>(() =>
            Zephyr.createTestCase(zephyrToken, zephyrProjectKey, atlassianUserId, {
              folderId: folder.id,
              name: test.name,
              objective: test?.objective ?? undefined,
              precondition: test?.precondition ?? undefined,
            }),
          ),
      )

      // Iterate over all steps and parses all strings with Mustache
      const contextualizedSteps = test.steps.map((testCase) =>
        Object.fromEntries(Object.entries(testCase).map(([key, value]) => [key, Mustache.render(value, context)])),
      )

      // eslint-disable-next-line no-await-in-loop, @typescript-eslint/no-unused-vars
      const response = await utils.spinner(
        `Adding steps to ${chalk.magenta(test.name)} (${chalk.magenta(testCase.key)}) test case`,
        `Successfully added steps to ${chalk.magenta(test.name)} (${chalk.magenta(testCase.key)}) test case!`,
        `Failed add steps to ${chalk.magenta(test.name)} (${chalk.magenta(testCase.key)}) test case`,
        () =>
          utils.json<unknown>(() =>
            Zephyr.addTestCaseSteps(
              zephyrToken,
              testCase.key,
              contextualizedSteps.map((step) =>
                'key' in step
                  ? {
                      testCase: {
                        testCaseKey: step.key
                      }
                    }
                  : {
                      inline: {
                        description: step.description,
                        expectedResult: step.expected,
                      }
                    },
              ),
            ),
          ),
      )

      context[test.name] = testCase
    }

    this.log('::: Bulk create completed! :::')
  }
}
