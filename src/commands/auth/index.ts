import {Command, Flags} from '@oclif/core'

import { writeLocalDataFile } from '../../utils/index.js'

export default class Auth extends Command {
  static override description = 'Authenticates with Zephyr API, see how you can generate a token here: https://support.smartbear.com/zephyr-scale-cloud/docs/en/rest-api/generating-api-access-tokens.html'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    project: Flags.string({char: 'p', description: 'Zephyr project ID', required: true}),
    token: Flags.string({char: 't', description: 'Zephyr token', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Auth)

    writeLocalDataFile({
      projectId: flags.project,
      token: flags.token,
    })
  }
}
