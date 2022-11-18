cconst fs = require('fs');
const inquirer = require('inquirer');
//from Library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const webSite = require('./src/generate-site.js');
const path = require('path');
const directOutput = path.resolve(__dirname, 'output');
const outputPath = path.join(directOutput, 'index.html');
const teamMember = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee\'s name?',
            validate: nameInput => {
                if(nameInput){
                return true;                 
            }   else {console.log('Please enter name!');
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
            }   else {console.log('Please enter ID!');
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
        const manager = new Manager(answers.name, answers.id, answers.email, officeNumber);
        teamMember.push(manager);
        promptMenu();
    } )
}