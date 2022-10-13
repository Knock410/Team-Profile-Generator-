const inquirer = require('inquirer');
const team = []
 const fs = require("fs");
 const Employee = require("./lib/Employee.js")
const generateHtml = require('./src/generateHtml');
const Manager = require('./lib/Manager.js')
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

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
  function managerPrompt(){
    inquirer.prompt(managerQuestions).then((answers) => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.employeeId, answers.officeNumber, answers.email)
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
  function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
      console.log(engineerAnswers);
      const engineer = new Engineer(engineerAnswers.engineerName,engineerAnswers.engineerId,engineerAnswers.gitHub)
      team.push(engineer)
      menuPrompt();
    });
  }

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
     function internPrompt(){
      inquirer.prompt(internQuestions).then((internAnswers) => {
        console.log(internAnswers);
        const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.email, internAnswers.school)
    team.push(intern)
    menuPrompt();

      });
    }
  






function  menuPrompt() {
  inquirer.prompt(additonalTeamMemebersQuestions).then((answers) => {
    console.log(answers);
    if (answers.additionalEmployees === "Engineer") {
      engineerPrompt();
      
    }
    if (answers.additionalEmployees === "Intern") {
    internPrompt();
    } 

    if (answers.additionalEmployees=== "None") {
      makeHtml()
  }
    });
  
  }

  
 function makeHtml(){ 
  fs.writeFile('index.html', generateHtml(team),err => {
    if (err) throw err;
  
    console.log('Your team is ready!');
 });
}


managerPrompt();