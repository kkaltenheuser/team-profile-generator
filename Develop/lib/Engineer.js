// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');
// consult employee then engineer (lib)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // In addition to Employee's parameters, Engineer will also have:
        // github // GitHub username
        super(name, id, email);
        this.github = github;
    }
    
    // getGithub()
    getGithub() {
        return this.github;
    }
    
    // getRole() 
    getRole() {
        // Overridden to return 'Engineer' rather than 'Employee'
        return 'Engineer';
    }
}

// Export module
module.exports = Engineer;