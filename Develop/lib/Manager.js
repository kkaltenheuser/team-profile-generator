// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Require employee
const Employee = require('./Employee');

// Create manager class that extends employee
class Manager extends Employee {
    // Create constructor w/ parameters from employee, as well as officeNumber (rel noted in htmlRenderer)
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }
    // getOfficeNumber()
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getRole() 
    getRole() {
        // overridden to return manager
        return 'Manager';
    }
}

// Export module
module.exports = Manager;