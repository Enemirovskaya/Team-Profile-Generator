const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
//super is used to call parent-constractor
    super(name, id, email);
    this.github = github;
 }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}
module.exports = Engineer;