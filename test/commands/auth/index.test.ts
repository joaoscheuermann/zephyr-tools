import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('auth', () => {
  it('runs auth cmd', async () => {
    const {stdout} = await runCommand('auth')
    expect(stdout).to.contain('hello world')
  })
})
