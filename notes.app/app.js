const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title:' + argv.title)
        console.log('body:'  + argv.body)
    }
})

// create remove command

yargs.command({
    command:'remove',
    describe: 'Removing the note',
    handler: function(){
        console.log('Removing the note')
    }
})

// create read command
yargs.command({
    command:'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note')
    }
})
// create read command
yargs.command({
    command:'list',
    describe: 'list all notes',
    handler: function(){
        console.log('list all notes')
    }
})
console.log(yargs.argv)