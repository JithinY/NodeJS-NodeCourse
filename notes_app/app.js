
//const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js')
const result = getNotes()
console.log(result)
console.log(chalk.bold.red.inverse('Error!'))
//console.log(validator.isEmaidirl('checking@gmail.com'))
