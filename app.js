const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const question = require("./lib/question");
const managerquestion = require("./lib/managerquestion");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
let team = [];
const render = require("./lib/htmlRenderer");

// First promt to add Manager to Team
inquirer.prompt(managerquestion).then((managerresponse) => {
    // Create Manager Object using Manager Class
    let emp = new Manager(managerresponse.name,managerresponse.email,managerresponse.id, managerresponse.officeNumber )
    // Add Manager to team array
    team.push(emp) 
    // Call employee function
    employees()
    
})

function employees() {
    // Second prompt with questions to add Engineers and Interns
    inquirer.prompt(question).then((response) => {
        if (response.role === "Engineer") {
            // Create Engineer Object using Engineer Class
            let emp = new Engineer(response.name,response.email,response.id, response.github )
            // Add Engineer to team array
            team.push(emp)
            
        }
        if (response.role === "Intern") {
            // Create Inter Object using Inter Class
            let emp = new Intern(response.name,response.email,response.id, response.school )
            // Add Engineer to team array
            team.push(emp)        
            
        }
        // If user wants to add additional employees, call the employee function again
        if (response.addmore) {
            employees()
        }
        // When user is finished adding employees, render team to HTML
        else {const template = render(team)
             fs.writeFile(outputPath, template, (err) =>
        err ? console.log(err) : console.log("Success!"))}
    
    })
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
