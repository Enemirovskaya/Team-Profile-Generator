const fs = require('fs');
const inquirer = require('inquirer');
//from Library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const webSite = require('./src/template.js');
const path = require('path');
const directOutput = path.resolve(__dirname, 'output');
const outputPath = path.join(directOutput, 'index.html');
const teamMember = [];

// Promp of questions to build Manager's profile
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee\'s name?',
            validate: nameInput => {
                if(nameInput){
                return true;                 
            }   else {console.log('Please enter the name!');
                return false;
            }},

            type: 'input',
            name: 'id',
            message: 'Enter employee\'s ID?',
            validate: id => {
                if(id){
                return true;                  
            }   else {console.log('Please enter ID!');
                return false;
            }},

            type: 'input',
            name: 'email',
            message: 'Enter employee\'s email?',
            validate: email => {
                if(email){
                return true;                  
            }   else {console.log('Please enter email!');
                return false;
            }},

            type: 'input',
            name: 'officeNumber',
            message: 'Enter employee\'s office number?',
            validate: officeNumber => {
                if(officeNumber){
                return true;                  
            }   else {console.log('Please enter office number!');
                return false;
            }},
            

        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMember.push(manager);
        promptOption();
    } )
};
// Prompting user to choose what profile will be built next if any. 
    const promptOption = () => {
        return inquirer.prompt ([{
            type: 'list',
            name: 'options',
            message: 'Please select next options:',
            choices: ['add an engineer', 'add an intern', 'finish building team']

    }]).then(userChoice => {
        switch(userChoice.menu){
            case 'add an engineer':
                promptEngineer();
                break;
            case 'add an intern':
                promptIntern();
                break;
            default: buildTeam();

        }
    })
};
//Building engineer profile
const promptEngineer = ()=>
{
    return inquirer.prompt([
    {
            type: 'input',
            name: 'name',
            message: 'Enter engineer\'s name?',
            validate: engineerName => {
                if(engineerName){
                return true;                 
            }   else {console.log('Please enter the name!');
                return false;}},
            
            
                type: 'input',
                name: 'engineerId',
                message: 'Enter employee\'s ID?',
                validate: id => {
                    if(id){
                    return true;                 
                }   else {console.log('Please enter ID!');
                    return false;}},
                
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter employee\'s email?',
                validate: email => {
                    if(email){
                    return true;                 
                }   else {console.log('Please enter email!');
                    return false;}},

                type: 'input',
                name: 'github',
                message: 'Enter employee\'s GitHub?',
                validate: github => {
                    if(github){
                    return true;                 
                }   else {console.log('Please enter GitHub!');
                    return false;}},
    }]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMember.push(engineer);
        promptOption();
    } )
};

//Building intern profile
const promptIntern = ()=>
{
    return inquirer.prompt([
    {
            type: 'input',
            name: 'name',
            message: 'Enter intern\'s name?',
            validate: internName => {
                if(internName){
                return true;                 
            }   else {console.log('Please enter the name!');
                return false;}},
            
            
                type: 'input',
                name: 'engineerId',
                message: 'Enter employee\'s ID?',
                validate: id => {
                    if(id){
                    return true;                 
                }   else {console.log('Please enter ID!');
                    return false;}},
                
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter employee\'s email?',
                validate: email => {
                    if(email){
                    return true;                 
                }   else {console.log('Please enter email!');
                    return false;}},

                type: 'input',
                name: 'school',
                message: 'Enter employee\'s school name?',
                validate: school => {
                    if(school){
                    return true;                 
                }   else {console.log('Please enter school name!');
                    return false;}},
    }]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMember.push(intern);
        promptOption();
    } )
};

const finish = () => {
    if(!fs.existsSync(directOutput)){
        fs.mkdirSync(directOutput)
    }
    fs.writeFileSync(outputPath, generateSite(teamMember));
}
promptManager();