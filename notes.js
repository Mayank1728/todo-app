const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
  return 'Here are your notes...';
}
const addNote = function (title, body) {
  // 1. load the json file
  let data = loadJSON();

  // check if user trying to add dup title
  const d = data.filter(function (note) {
    return note.name != title;
  });

  if (d.length === data.length) {
    data.push({
      title: title,
      body: body,
    });
    console.log('Now saving changes in the file!');

    //
    saveChanges(data);
  } else {
    console.log('ERROR! Title already exists');
  }
  /* 
     1. if json doesn't exist create one
     2. else load the data from json
     3. push data
     4. save changes to json file
  */
};

function saveChanges(data) {
  fs.writeFileSync('notes.json', JSON.stringify(data));
  console.log(data);
}

function loadJSON() {
  try {
    const buffer = fs.readFileSync('notes.json', 'utf-8');
    const data = JSON.parse(buffer);
    return data;
  } catch {
    return [];
  }
}

const removeNote = function (title) {
  /* 
     1. if found delete it
     2. else say not found
  */
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
    console.log(data);
    saveChanges(data);
    console.log(chalk.green.inverse('Note Deleted successfully'));
  } else {
    console.log(chalk.red.inverse('Note does not exist!!'));
  }
};
// how does chaining works ? left to right or r to l?
// when you don't have keyvalue pair this means key and value are same
module.exports = {
  getNotes,
  addNote,
  removeNote,
};
