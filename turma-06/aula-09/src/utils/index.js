import path from 'path'
import { fileURLToPath } from 'url'

export function getDirName() {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    return __dirname
}