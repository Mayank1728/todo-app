const fs = require('fs');
const chalk = require('chalk');

const saveChanges = (data) =>
  fs.writeFileSync('notes.json', JSON.stringify(data));

const loadJSON = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
  } catch {
    return [];
  }
};

const addNote = function (title, body) {
  let data = loadJSON();
  const dup = data.find((note) => note.title === title);

  if (!dup) {
    data.push({
      title: title,
      body: body,
    });
    console.log('Now saving changes in the file!');
    saveChanges(data);
  } else {
    console.log('ERROR! Title already exists');
  }
};

/* 
     1. if json doesn't exist create one
     2. else load the data from json
     3. push data
     4. save changes to json file
  */

const removeNote = function (title) {
  let data = loadJSON();
  let isNoteFound = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === title) {
      isNoteFound = true;
      break;
    }
  }
  if (isNoteFound) {
    data = data.filter((note) => note.title != title);
    saveChanges(data);
    console.log(chalk.green.inverse('Note Deleted successfully'));
  } else {
    console.log(chalk.red.inverse('Note does not exist!!'));
  }
};

const list = () => {
  const data = loadJSON();
  data.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const data = loadJSON();
  const isNote = data.find((note) => note.title === title);
  if (isNote) {
    console.log(chalk.green('Title: ') + isNote.title);
    console.log(chalk.green('Body: ') + isNote.body);
  } else {
    console.log(chalk.red.inverse('NOT FOUND!') + ' ' + title);
  }
};
// how does chaining works ? left to right or r to l?
// when you don't have keyvalue pair this means key and value are same
module.exports = {
  addNote,
  removeNote,
  list,
  readNote,
};
