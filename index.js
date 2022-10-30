const inquirer = require("inquirer");
const team = [];
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const generateHtml = require("./src/generateHtml");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const path = require("path");

//Mananger questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the manager?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];
//adds manager data to the team array
function managerPrompt() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers);
    const manager = new Manager(
      answers.managerName,
      answers.employeeId,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
    menuPrompt();
  });
}

//  menu questions
const additonalTeamMemebersQuestions = [
  {
    type: "list",
    name: "additionalEmployees",
    message: "Would you like to add the following team members?",
    choices: ["Engineer", "Intern", "None"],
  },
];
//Engineer questions
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is their GitHub username?",
  },
];
//Starts engineer questions and captures engineer data 
function engineerPrompt() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    console.log(engineerAnswers);
    const engineer = new Engineer(
      engineerAnswers.engineerName,
      engineerAnswers.engineerId,
      engineerAnswers.email,
      engineerAnswers.gitHub
    
    );
    team.push(engineer);
    menuPrompt();
  });
}
//Intern Questions 
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school did they go to?",
  },
];
//Starts intern questions and captures intern data 
function internPrompt() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    console.log(internAnswers);
    const intern = new Intern(
      internAnswers.internName,
      internAnswers.internId,
      internAnswers.email,
      internAnswers.school
    );
    team.push(intern);
    menuPrompt();
  });
}
//Brings user to the employee select menu to add more employees 
function menuPrompt() {
  inquirer.prompt(additonalTeamMemebersQuestions).then((answers) => {
    console.log(answers);
    if (answers.additionalEmployees === "Engineer") {
      engineerPrompt();
    }
    if (answers.additionalEmployees === "Intern") {
      internPrompt();
    }

    if (answers.additionalEmployees === "None") {
      makeHtml();
    }
  });
}
//creates a dist folder and generates Html 
function makeHtml() {
  // if dist doesn't exist
  if (!fs.existsSync(path.join(__dirname, "dist"))) {
    // create a folder dist
    fs.mkdirSync(path.join(__dirname, "dist"));
  }
  
  fs.writeFile("dist/index.html", generateHtml(team), (err) => {
    if (err) throw err;

    console.log("Your team is ready!");
  });
}

managerPrompt();
