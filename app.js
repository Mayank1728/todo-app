const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// the add command needs title and body 5:05
yargs.command({
  command: 'add',
  describe: 'to add new notes',
  builder: {
    title: {
      describe: 'Notes Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Notes Body',
      type: 'string',
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log(chalk.green.inverse('Creating a new file called:'), argv.title);
    notes.addNote(argv.title, argv.body);
  },
});

// neds title of file to be removed
yargs.command({
  command: 'rem',
  describe: 'removing the note',
  builder: {
    title: {
      describe: 'Delete Note',
      type: 'string',
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log(chalk.inverse.red('Removing the note!!'));
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'to read a note',
  builder: {
    title: {
      describe: 'To read the file',
      type: 'string',
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log('kalkd');
  },
});

yargs.command({
  command: 'list',
  describe: 'To list the notes',
  handler: function () {
    console.log(
      chalk.italic.inverse.blue('Listing all the notes available...'),
    );
  },
});

yargs.parse();
