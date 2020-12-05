// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Require employee
const Employee = require('./Employee');

// Create intern class that extends employee
class Intern extends Employee {
    // Create constructor w/ parameters derived from employee parameter, as well as school user input
    constructor(name,  id, email, school) {
        super(name, id, email);
        this.school = school; 
    }
    // getSchool()
    getSchool() {
        return this.school;
    }
    // getRole() 
    getRole() {
        // override employee to return intern
        return 'Intern';
    }
}

// Export module
module.exports = Intern;