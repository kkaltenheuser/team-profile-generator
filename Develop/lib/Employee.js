// TODO: Write code to define and export the Employee class

class Employee {
    // Set up parameters where the user can input data
    constructor(name, id, email) {
    // Parent class requires the following:
        // Name
        this.name = name;
        // ID
        this.id = id;
        // Email
        this.email = email;
    }
    // getName()
    getName() {
        return this.name;
    }
    // getId()
    getId() {
        return this.id;
    }
    // getEmail()
    getEmail() {
        return this.email;
    }
    // getRole() 
    getRole() {
        // returns 'Employee'
        return 'Employee';
    }
}

// Export module
module.exports = Employee;