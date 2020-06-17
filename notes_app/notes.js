
const fs = require('fs')
const { Console } = require('console')

const getNotes = function(){
    const bufferData = fs.readFileSync('notes.json')
    const stringJsonData = bufferData.toString()
    return stringJsonData
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(
        function(note){
            return note.Title === title
        }
    )

    if(duplicateNotes.length === 0){
        console.log('Addding a note!')
        notes.push(
            {Title:title,Body:body}
        )
        const stringJsonData = JSON.stringify(notes);
        fs.writeFileSync('notes.json',stringJsonData)
    }    
    else{
        console.log('Duplicate note found with same title!!')
    }
    
}

const loadNotes = function(){
    try{
    const bufferData = fs.readFileSync('notes.json')
    const stringJsonData = bufferData.toString()
    return JSON.parse(stringJsonData)
    }
    catch(e){ 
        console.log(e.toString())
        return[]
    }
}

const notesUtil = {
    getNotes:getNotes,
    addNote:addNote
}

module.exports = notesUtil
