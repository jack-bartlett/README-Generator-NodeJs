// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  return '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license !== "None"){
    return `\n * [License](#license) \n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    This project is licensed under the ${license} license.`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `#${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)
${renderLicenseLink(data.license)}
  * [Contribution](#contribution)

  * [Tests](#tests)

  * [License](#license)

  * [Questions](#questions)

## Title
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## Contribution
${data.guidelines}

## Tests
${data.testinstructions}

${renderLicenseSection(data.license)}

## Questions 

If you have any further questions feel free to contact me directly at ${data.email}.
You can find my other work at [${data.githubinfo}](https://github.com/${data.githubinfo}/)`

};


module.exports = generateMarkdown;
