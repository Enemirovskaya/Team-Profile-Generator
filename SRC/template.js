 const template = (team) =>
{
     // create empty array to push and loop data
     const html = [];
 
        const templateManager = manager => {
        //HTML for manager
         let managerHTML = `
        <div class="box col-lg-3">
         <div class="box-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3> 
         </div>
            <ul class="list">
              <li class="id">ID: ${manager.id}</li>
              <li class="email">Email: <span>${manager.email}</span></li>
              <li class="office-number">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>`;
        html.push(managerHTML);
    }
    //HTML for engineer
    const templateEngineer = engineer =>{
        let engineerHTML =`
    <div class="box col-lg-3">
         <div class="box-header">
             <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3> 
        </div>
      <ul class="list">
             <li class="id">ID: ${engineer.id}</li>
             <li class="email">Email: <span>${engineer.email}</span></li>
             <li class="github">GitHub: <span>${engineer.github}</span></li>
      </ul>
     </div>`;
    html.push(engineerHTML);
    }
        //HTML for intern
        const templateIntern = intern =>{
        let internHTML =`
     <div class="box col-lg-3">
         <div class="box-header">
             <h2 class="card-title">${intern.name}</h2>
             <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3> 
         </div>
         <ul class="list">
             <li class="id">ID: ${intern.id}</li>
             <li class="email">Email: <span>${intern.email}</span></li>
             <li class="school">School: ${intern.school}</li>
         </ul>
     </div>`;
     html.push(internHTML);
    }

    // FOR LOOP thar eterates all the employees
    for(let i=0; i<team.length; i++) 
    {
      if(team[i].getRole()==='Manager'){
      templateManager(team[i]);
      }
      if (team[i].getRole()==='Engineer'){
        templateEngineer(team[i]);
      }
      if(team[i].getRole()==='Intern'){
        templateIntern(team[i]);
      }
    } 

    //Put together all the profiles
    return html.join('');
}
// take it to team.html and append child template(team)
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="./style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <link  rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous" />
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>
    
        <main>
            <section class="container">
                 <div class="team-area row"> 
                      ${template(team)}
                 </div>  
            </section>
        </main>
    </body>
    </html>`;
}

