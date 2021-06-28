
// TODO:  packages needed for this application
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project",
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
       
    },
    {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to include a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation information.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license is your project covered under?',
        choices:[
        "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
        "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
        "None"],
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Are there any other contributors to this project.'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter any test run for  your project.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your github username.'
      },
    
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {return console.log(err);}
        console.log('Success! README page created!');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
        .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}


// Function call to initialize app
init();
