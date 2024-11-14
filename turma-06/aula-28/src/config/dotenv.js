import { Command } from 'commander'
import { config } from 'dotenv'

const program = new Command()

program
  .option('--mode <mode>', 'Especifique o ambiente desejado', 'DEVELOPMENT')
  .parse(process.argv)

const options = program.opts()
const environment = options.mode.toUpperCase()

config({
    path: environment === 'PRODUCTION' ? './.env' : './.env.development'
})

console.log(`Variáveis de ambiente carregadas para ${environment}`)
