// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'what is your github username?',

    validate: function (answer) {
        if (answer.length < 1){
            return console.log('You must enter your github username.');
        }
        return true;
    }
},
{
    type: 'input',
    name: 'repository',
    message: 'What is your github repository?',

    validate: function (answer) {
        if (answer.length < 1){
          return  console.log('You must enter your github repository.');
        }
        return true;
    }
}, 

{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
   
    validate: function (answer) {
        if (answer.length < 1){
          return  console.log('You must enter your github repository.');
        }
        return true;
    }
}, 

{
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project.', 

    validate: function (answer){
        if (answer.length < 1){
            return console.log('you must enter the description of your project.')
        }
        return true;
    }
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => if(err){
       return console.log(err);
    }
    console.log('Your markdown file has been created.')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
