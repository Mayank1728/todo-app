# Command Line Notes App/ To-Do APP


https://user-images.githubusercontent.com/71082230/232237812-bdf54848-22b8-47e5-9c46-85f1474ac063.mp4

## Overview

This is a command line application that allows you to store your notes. It provides functionality to add notes, delete notes, list all notes, and read specific notes.
Technologies Used

## The following technologies were used to build this application:

    Node.js
    Yargs (for parsing command line arguments)
    Chalk (for terminal string styling)
    File System (inbuilt Node.js module) for reading and writing data in JSON

## How It Works
Parsing Command Line Arguments with Yargs

To know what operation the user wants to perform (add, rem, lis, read), we need to get the command line information. We can use process.argv, which returns an array with all the commands that were entered with space being the delimiter. For example, if the user enters node app.js add, process.argv will return [‘node’, ‘app.js’, ‘add’].

However, parsing information from this array can be cumbersome, and we would need multiple checks to ensure that the user has properly written the command. For example, when adding a note, both the title and body are required; if they are not provided, an error should be thrown.

Therefore, we use Yargs to make parsing information from the command line much easier. With Yargs, we can define the commands and options for our application in a more structured and user-friendly way. 

Alias are defined so instead of typing --title or --body, -t or -b is enough. Lastly didn't discuss about chalk as it was used for aesthetic purposes ONLY.

### Adding a Note

To add a note, we first load the data from the existing JSON file. Then, we check for duplicate titles in the data. If a duplicate exists, an error is thrown. Otherwise, the note is added to the data and the changes are saved to the JSON file by overwriting it with the updated data.

### Deleting a Note

To delete a note, we first load the data from the existing JSON file. Then, we look for the title to be deleted and filter it out. Finally, we save the changes to the JSON file.

### Listing Notes

To list all the notes, we load the data from the existing JSON file and display it.

### Reading a Specific Note

To read a specific note, we load the data from the existing JSON file and look for the title in the data. If the title is not found, an error is thrown. Otherwise, the title and its content are displayed.

### Other things I learned

1. Understanding documentation.
2. Workings of .filter(), .find(), .forEach() methods.
3. Destructuring objects and exporting & importing functions from a file

## Conclusion

This command line notes app provides a simple and efficient way to manage your notes from the terminal. The use of Node.js and its built-in modules, along with Yargs and Chalk, allows for a streamlined and effective approach to parsing and managing command line arguments.
