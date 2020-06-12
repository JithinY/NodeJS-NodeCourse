/*
const fs = require('fs')

fs.writeFileSync('notes.txt','The input is by node js!!')
fs.appendFileSync('notes.txt',', Checking the append sync working');
*/
/*
const hMsg = require('./uitls')
const welcomeNote= 'Welcome to NodeJS'
console.log(welcomeNote)
console.log(hMsg) 
*/

const getNotes = require('./notes')
const result = getNotes()
console.log(result)

