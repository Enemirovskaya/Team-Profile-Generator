 const template = (team) => {
    // create empty array to push and loop data
    const html = [];
 
    const templateManager = manager => {
    //HTML for manager
     let managerHTML = `
     <div class="box">
     <div class="box-header">
         ${manager.name} <br/>
         Manager
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
    <div class="box">
    <div class="box-header">
        ${engineer.name} <br/>
        Engineer
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
    <div class="box">
    <div class="box-header">
        ${intern.name} <br/>
        Intern
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
for(let i=0; i<team.length; i++) {
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

module.exports = team => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="./style.css" />
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
            ${template(team)}
        </main>
    </body>
    </html>`;
}
}
