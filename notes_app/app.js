
const chalk = require('chalk')
const yargs = require('yargs')
const notesUtil = require('./notes.js')

yargs.command({
        command:'add',
        describe:'To add new note',
        builder:{
            title:{
                describe:'Title for Note',
                demandOption:true,
                type: 'string'
            },
            body:{
                describe:'Body for Note',
                demandOption:true,
                type: 'string'
            }
        },
        handler: function(argv){
            notesUtil.addNote(argv.title,argv.body)
        }
})
yargs.command({
    command:'remove',
    describe:'To remove new note',
    handler: function(){
        console.log('Removing a note!')
    }
})
yargs.command({
    command:'list',
    describe:'To list notes',
    handler: function(){
        console.log('Listing the notes here..!')
        const stringJsonData = notesUtil.getNotes()
        console.log(stringJsonData)
    }
})
yargs.command({
    command:'read',
    describe:'To read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})

yargs.parse()


