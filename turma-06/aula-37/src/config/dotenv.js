import { Command } from 'commander'
import { config } from 'dotenv'

const program = new Command()

program
  .option('--mode <mode>', 'Especifique o ambiente desejado', 'development')
  .parse(process.argv)

const options = program.opts()
const environment = options.mode.toLowerCase()

config({
  path: environment === 'production' ? './.env' : './.env.development'
})

console.log(`${environment.toUpperCase()} MODE`)
