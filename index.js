const inquirer = require("inquirer");
const fs = require("fs");

/* === promptUser ===
Prompts the user with a series of questions used to populate the readme file.
After which it writes the file.
=== promptUser ===*/
const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "Please provide installation instructions for your project.",
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
        name: "scAlt",
      },
      {
        type: "input",
        message: "Please provide the path to your screenshot.",
        name: "scPath",
      },
      {
        type: "input",
        message:
          "Please provide a list of credits, including collaborators, 3rd party assets, or tutorials used in the making of this project.",
        name: "credits",
      },
    ])
    .then((answers) => {
      // generates readme markdown based on answers
      const readmeText = makeReadMe(answers);
      // writes the readme file using the generated markdown
      fs.writeFile("README.md", readmeText, (error) => {
        error ? console.error(error) : console.log("Success!");
      });
    });
};

/* === makeReadMe ===
Creates the markdown text used in the readme file.
=== makeReadMe ===*/
const makeReadMe = ({
  title,
  description,
  installation,
  usage,
  scAlt,
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
  
  ![alt ${scAlt}](${scPath})
  
  ## Credits
  
  ${credits}

  ## License
  
  Please refer to the LICENSE in the repo.
`;

/* === Main ===
Runs the function used to prompt the user with a series of project-related questions.
=== Main ===*/
promptUser();
