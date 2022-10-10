const inquirer = require('inquirer');
const team = []
 const fs = require("fs");
//  const generateHtml = require();


// const managerQuestions =
 inquirer.prompt([
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
  // ];
  
  // function promptManager() {
  //   inquirer.prompt(managerQuestions).then((answers) => {
  //     console.log(answers);
  //     const manager = new Manager(answers.managerName, answers.employeeId, answers.email, answers.officeNumber)
  //     team.push(manager)
  //     promptMenu();
  //   });
  // }
  // promptManager();

  // const additonalEmployeesQuestions = [
    {
      type: "list",
      name: "additionalEmployees",
      message: "Would you like to add the following additonal employees?",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);




//  function makeHtml(){ 
//   fs.writeFile('index.html', generateHtml(team),err => {
//     if (err) throw err;
  
//     console.log('Your team is ready!');
//  });
// }
  
  