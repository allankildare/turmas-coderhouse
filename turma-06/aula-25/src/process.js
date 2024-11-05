// console.log(process.argv.slice(2))
import { Command } from 'commander'

const program = new Command()

program
  .option('--mode <mode>', 'Modo de execução', 'development')
  .option('-d, --debug', 'Debug de processo', false)

program.parse()

console.log(program.options)
console.log(program.args)
