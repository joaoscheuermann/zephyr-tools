import {Command, Flags} from '@oclif/core'
import assert from 'node:assert'
import path from 'node:path'

import * as Zephyr from '../../api/zephyr/index.js'
import {ZephyrFolder} from '../../types/index.js'
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
    const {flags} = await this.parse(BulkCreate)

    const localData = readLocalDataFile()

    const zephyrToken = localData?.zephyr?.token
    const zephyrProjectKey = localData?.zephyr?.project?.key

    assert(zephyrToken)
    assert(zephyrProjectKey)

    const targetPath = path.resolve(process.cwd(), flags.file)

    const folders = await Zephyr.fetchAllRegisters<ZephyrFolder>(
      (startAt, maxResults) =>
        Zephyr.getFolders(zephyrToken, zephyrProjectKey, startAt, maxResults),
      0,
      25,
    )

    console.log(folders)

    this.log(`Bulk creating ${flags.type} from file: ${targetPath}`)
  }
}
