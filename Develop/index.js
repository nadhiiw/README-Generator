// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const api = require('./utils/api');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'what is your github username?',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('You must enter your github username.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is your github repository?',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('You must enter your github repository.');
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('You must enter your github repository.');
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project.',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('you must enter the description of your project.')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT', 'Apache', 'GPLv2', 'none'],
        name: 'license'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your markdown file has been created")
    });
}

// TODO: Create a function to initialize app

// Main function
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            var readme = markdown(answers, api.getUser(answers.username));
            // console.log(readme);
            writeToFile('Generate-README.md', readme);
        });
}

// Function call to initialize app
init();
