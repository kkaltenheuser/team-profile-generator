const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const render = require("./lib/htmlRenderer");
// array to hold all added employees
let allEmployees = [];

// prompt/input/questions to populate employee data
const start = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's work email address?",
            name: "email"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employeeType",
        }
        // questions specific to the type of employee
    ]).then(function (data) {
        if (data.employeeType === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the managers's office number?",
                    name: "officeNumber"
                }
            ]).then(function (managerData) {
                // new manager w/ user input
                let newManager = new Manager(data.name, data.id, data.email, managerData.officeNumber);
                // push new manager to  employee array
                allEmployees.push(newManager);
                // ask if the user would like to add another employee
                nextEmployee();
            })
        }
        if (data.employeeType === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "github"
                }
            ]).then(function (engineerData) {
                //  new engineer w/ user input
                let newEngineer = new Engineer(data.name, data.id, data.email, engineerData.github);
                // push new engineer to employee array
                allEmployees.push(newEngineer);
                // ask if user would like to add employee
                nextEmployee();
            });
        }
        if (data.employeeType === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Which school is the intern attending?",
                    name: "school"
                }
            ]).then(function (internData) {
                //  new intern w/ user input
                let newIntern = new Intern(data.name, data.id, data.email, internData.school);
                // push new intern to the employee array
                allEmployees.push(newIntern);
                // ask if user would like to add another employee
                nextEmployee();
            })
        }
    })

}

// inquire if user like to add or render
const nextEmployee = () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "add"
        }
    ]).then(function (data) {
        // if true, run prompt again
        if (data.add === true) {
            questions();
        } else {
            // if user is done, render HTML
            fs.writeFile("team.html", render(allEmployees), function (err) {
                if (err) {
                    // if error occurs while rendering HTML
                    return console.log("Please try again.")
                }
            });
            // Send success message
            console.log("HTML file successfully created.")
        }
    })
}

start();