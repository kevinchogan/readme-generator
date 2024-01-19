const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide installation instructions for your project",
      name: "installation",
    },
    {
      type: "input",
      message: "Please provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please provide alternate text for your screenshot.",
      name: "scName",
    },
    {
      type: "input",
      message: "Please provide the path to your screenshot.",
      name: "scPath",
    },
    {
      type: "input",
      message: "Please provide a list of credits, including collaborators, 3rd party assets, or tutorials used in the making of this project.",
      name: "credits",
    },
  ])
  .then((answers) => {
    const htmlText = makeReadMe(answers);
    fs.writeFile("README.md", htmlText, (error) => {
      error ? console.error(error) : console.log("Success!");
    });
  });
}

const makeReadMe = ({
  title,
  description,
  installation,
  usage,
  scName,
  scPath,
  credits,
}) =>
  `
  # ${title}

  ## Description
  ${description}  
    
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ![alt ${scName}](${scPath})
  
  ## Credits
  
  ${credits}

  ## License
  
  Please refer to the LICENSE in the repo.
`;

promptUser();
