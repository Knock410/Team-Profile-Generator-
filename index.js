const inquirer = require('inquirer');


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
  
  function promptManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.employeeId, answers.email, answers.officeNumber)
      team.push(manager)
      promptMenu();
    });
  }
  promptManager();