import validator from 'validator';
import fs from 'fs';
import chalk from 'chalk';
import yargs from 'yargs';

// the add command needs title and body
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
    const file = {
      title: argv.title,
      body: argv.body,
    };
    fs.writeFileSync(`${argv.title}.json`, JSON.stringify(file));
  },
});

// neds title of file to be removed
yargs.command({
  command: 'rem',
  describe: 'removing the note',
  builder: {
    title: {
      describe: 'Delete file',
      type: 'string',
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log(chalk.inverse.red('Removing the note!!'));
    console.log(`Name of the file is ${argv.title}`);
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
    let data = fs.readFileSync(`${argv.title}.json`, 'utf-8');
    data = JSON.parse(data);
    console.log(chalk.yellowBright.inverse(`${argv.title} contains: `));
    console.log('task: ', data.title);
    console.log('notes: ', data.body);
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
