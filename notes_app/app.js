
//const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js')
const result = getNotes()
console.log(result)
console.log(chalk.blue.inverse.bold('Success!'))
//console.log(validator.isEmaidirl('checking@gmail.com'))

console.log(process.argv[2])