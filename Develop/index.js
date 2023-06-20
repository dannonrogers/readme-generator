const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project?
        - What problem does it solve?
        - What did you learn?
        
    `
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests and examples of how to run them.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please select a license.',
        choices: ['none', 'MIT', 'GPLv2', 'Apache']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.'
    },
];

const generateMarkdown = ({ title, description, installation, usage, github, email, license, contributing, tests }) =>
    `# ${title}
  
## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

GitHub: ${github}

Email: ${email}

## License

${license}

## How to Contribute

${contributing}

## Tests

${tests}
`;
  
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownPageContent = generateMarkdown(answers);

      fs.writeFile('README.md', markdownPageContent, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md!')
      );
    });