import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'

import { LocalData } from '../types/index.js'

const __dirname = path.dirname(URL.fileURLToPath(import.meta.url))

const PROJECT_ROOT_DIR = path.join(__dirname, '..', '..')
const DATA_ROOT_DIR = path.join(PROJECT_ROOT_DIR, '.data')
const DATA_FILE_PATH = path.join(DATA_ROOT_DIR, 'data.json')

export const existsLocalDataFile = () => fs.existsSync(DATA_FILE_PATH)
export const readLocalDataFile = (): LocalData => (existsLocalDataFile() ? JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf8')) : null)
export const writeLocalDataFile = (data: LocalData) => {
  fs.mkdirSync(DATA_ROOT_DIR, {recursive: true})
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2))
}
