const inquirer = require('inquirer');
const team = []
 const fs = require("fs");
//  const generateHtml = require();


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
    inquirer.prompt(engineerQuestions).then((answers) => {
      console.log(answers);
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
      inquirer.prompt(internQuestions).then((answers) => {
        console.log(answers);
      });
    }
  




//  function makeHtml(){ 
//   fs.writeFile('index.html', generateHtml(team),err => {
//     if (err) throw err;
  
//     console.log('Your team is ready!');
//  });
// }


function  menuPrompt() {
  inquirer.prompt(additonalTeamMemebersQuestions).then((answers) => {
    console.log(answers);
    if (answers.additionalEmployees === "Engineer") {
      engineerPrompt();
      
    }
    if (answers.additionalEmployees === "Intern") {
    internPrompt();
    } 
    });
  
  }

  


managerPrompt();