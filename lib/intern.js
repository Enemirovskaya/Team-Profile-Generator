const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
//super is used to call parent-constractor
    super(name, id, email);
    this.school = school;
 }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern;