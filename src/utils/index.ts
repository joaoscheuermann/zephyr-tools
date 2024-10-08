import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'
import yoctoSpinner from 'yocto-spinner';

import { LocalData } from '../types/index.js'

const __dirname = path.dirname(URL.fileURLToPath(import.meta.url))

const PROJECT_ROOT_DIR = path.join(__dirname, '..', '..')
const DATA_ROOT_DIR = path.join(PROJECT_ROOT_DIR, '.data')
const DATA_FILE_PATH = path.join(DATA_ROOT_DIR, 'data.json')

export const existsLocalDataFile = () => fs.existsSync(DATA_FILE_PATH)

export const readLocalDataFile = (): LocalData => {
  const loadedData = existsLocalDataFile()
    ? JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf8')) as LocalData
    : null

  return {
    atlassian: {
      account: loadedData?.atlassian?.account ?? null,
      domain: loadedData?.atlassian?.domain ?? null,
      email: loadedData?.atlassian?.email ?? null,
      token: loadedData?.atlassian?.token ?? null,
    },
    zephyr: {
      project: loadedData?.zephyr?.project ?? null,
      token: loadedData?.zephyr?.token ?? null
    }
  }
}

export const writeLocalDataFile = (data: LocalData) => {
  fs.mkdirSync(DATA_ROOT_DIR, {recursive: true})
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2))
}

export const json = async <T>(request: () => Promise<Response>) => {
  const response = await request()
  const data = await response.json()

  return data as T
}

export const spinner = async <T>(text: string, successText: string, errorText: string, handler: () => Promise<T> ) => {
  const spinner = yoctoSpinner({ color: 'white', text }).start();

  try {
    const data = await handler()

    spinner.success(successText)

    return data
  } catch (error) {
    spinner.error(errorText)
    throw error
  }
}