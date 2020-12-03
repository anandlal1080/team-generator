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
