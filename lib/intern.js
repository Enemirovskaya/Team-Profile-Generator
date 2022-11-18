class Intern extends Employee{
    constructor(name, id, email, school){
//super is used to call parent-constractor
    super(name, id, email);
    this.school;
 }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Intern;