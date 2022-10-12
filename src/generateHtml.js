function generateHtml(team) {
    console.log(team)
    const managers = [team[0]]
    const engineers = []
    const interns = []

    // TO-DO: Sort employees into managers, engineers, and interns arrays
    // for loop
    // if employee is a manager then push them into managers array
    // if employee is a engineer then push them into engineer array
    // if employee is a intern then push them into inter array

    let managersHtml = ''
     //
    // TO-DO: loop through managers array and append html to managersHtml
  for(let i = 0; i < managers.length; i++) {
    const manager = managers[0] 
    managersHtml += `<div>
      <h1>${manager.name}</h1>
      <h2>${manager.officeNumber}</h2>
      <h3>${manager.email}</h3>
      <h4>${manager.employeeId}</h4>
    </div>`

  }

  // TO-DO: loop through engineers array and append html to engineersHtml

  // TO-DO: loop through interns array and append html to internsHTML

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <!--create html for managers with managers array-->
      ${managersHtml}
      <h1>${team[0].name}</h1>
      <h2><a href="https://github.com/">Github</a></h2>
      <!--create html for managers with engineers array-->

      <!--create html for managers with interns array-->
    </body>
    </html>
    `;
  };
  
//   fs.writeFile('./index.html', generateHtml(team), err => {
//     if (err) throw new Error(err);
  
//     console.log('Your team is ready');
//   });

  module.exports =generateHtml;