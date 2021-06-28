
// function to generate markdown for README
//TODO: Create a function to generate markdown for README
//Run the app multiple times with node index.js and  and see the readme getting updated each time with varied set of answers
function generateMarkdown(data) {
  return `
  # ${data.title} 
  # Description
  ${data.description}
   
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  ${data.license}
  ## Contributors
  ${data.contributors}
  ## Tests 
  ${data.test}  
  ## Questions
  Contact: ${data.email}
  Github Username: https://github.com/${data.username} 
  
  `;
}



module.exports = generateMarkdown;

