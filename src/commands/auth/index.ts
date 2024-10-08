/* eslint-disable @typescript-eslint/no-unused-vars */
import {input} from '@inquirer/prompts'
import {Command} from '@oclif/core'
import chalk from 'chalk'

import * as Atlassian from '../../api/atlassian/index.js'
import * as Zephyr from '../../api/zephyr/index.js'
import {AtlassianAccount, LocalData, ZephyrProject} from '../../types/index.js'
import * as utils from '../../utils/index.js'
import {writeLocalDataFile} from '../../utils/index.js'

export default class Auth extends Command {
  static override description =
    'Authenticates with Zephyr API, see how you can generate a token here: https://support.smartbear.com/zephyr-scale-cloud/docs/en/rest-api/generating-api-access-tokens.html'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  // ATATT3xFfGF0YT4lmBTOT3M0Ij03u70o0Zsw1cLvrqMTO2MIbmYkewWiaQsZDVSFDqqNkmO1rG7Kf9JxLfpbhWE55_sE4y8qIc4f4cllPv_7UqR48Ncu1MstyEo9aRe9gpOEVXKvoHYOUNBjl7pjm59JbMf0JG3hau-6rQRR6TuHtKfM3b1xJSg=BCACD630

  public async run(): Promise<void> {
    const data = utils.readLocalDataFile()

    const atlassianDomain = await input({
      default: data.atlassian.domain ?? undefined,
      message: `Enter your ${chalk.blue('Atlassian')} company Domain:`,
      required: true,
      validate: (value) => (/^[a-z]+$/.test(value) ? true : 'Invalid domain format'),
    })

    const atlassianEmail = await input({
      default: data.atlassian.email ?? undefined,
      message: `Enter your ${chalk.blue('Atlassian')} Email:`,
      required: true,
      validate: (value) => (/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(value) ? true : 'Invalid email format'),
    })

    const atlassianToken = await input({
      default: data.atlassian.token ?? undefined,
      message: `Enter your ${chalk.blue('Atlassian')} API Token:`,
      required: true,
    })

    const zephyrProjectKey = await input({
      default: data.zephyr.project?.key ?? undefined,
      message: `Enter ${chalk.magenta('Zephyr')} project key:`,
      required: true,
      validate: (value) => (/^[A-Z]+$/.test(value) ? true : 'Invalid project key format'),
    })

    const zephyrToken = await input({
      default: data.zephyr.token ?? undefined,
      message: `Enter ${chalk.magenta('Zephyr')} API Token:`,
      required: true,
    })

    const [atlassianAccount] = await utils.spinner(
      `Fetching ${chalk.blue('Atlassian')} user...`,
      chalk.green(`Successfully fetched ${chalk.bold('Atlassian')} user!`),
      chalk.red(`Failed to fetch ${chalk.bold('Atlassian')} user.`),
      () => utils.json<AtlassianAccount[]>(() => Atlassian.queryDomainUsers(atlassianDomain, atlassianToken, atlassianEmail))
    )

    if (!atlassianAccount) {
      throw new Error(`Could not find a Atlassian account`)
    }

    const zephyrProject = await utils.spinner(
      `Fetching ${chalk.magenta('Zephyr')} project...`,
      chalk.green(`Successfully fetched ${chalk.bold('Zephyr')} project!`),
      chalk.red(`Failed to fetch ${chalk.bold('Zephyr')} project.`),
      () => utils.json<ZephyrProject>(() => Zephyr.getProject(zephyrToken, zephyrProjectKey))
    )

    const updatedData: LocalData = {
      atlassian: {
        account: atlassianAccount,
        domain: atlassianDomain,
        email: atlassianEmail,
        token: atlassianToken
      },
      zephyr: {
        project: zephyrProject,
        token: zephyrToken
      }
    }

    writeLocalDataFile(updatedData)
  }
}
