// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown"); 
const choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title?"
},

{
    type: "input",
    name: "description",
    message: "What is the description of your project?" 
},

{
    type: "input",
    name: "installation",
    message: "please include any installation instructions" 
},

{
    type: "input",
    name: "usage",
    message: "please include any usage instructions" 
},

{
    type: "input",
    name: "guidelines",
    message: "please include any contribution guidelines" 
},

{
    type: "input",
    name: "testinstructions",
    message: "What are the test instructions?" 
},

{
    type: "list",
    name: "license",
    message: "What kind of license do you have?",
    choices: ["MIT", "Apache", "CCO", "None"]
},

{
    type: "input",
    name: "githubinfo",
    message: "What is your Github username?" 
},

{
    type: "input",
    name: "email",
    message: "What is your Email Address?" 
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data),(err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
}

// Function call to initialize app
init();
