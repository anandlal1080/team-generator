const { EMPLOYEE } = require('./color');
const { ENGINEER } = require('./color');
const { INTERN } = require('./color');
module.exports = [
    {
        name: 'name',
        message: `'What is the ${EMPLOYEE} name? '`
    },
    {
        name: 'id',
        message: 'What is the employee ID?'
    },
    {
        name: 'email',
        message: "What is the employee email?"
    },
    {
        name: 'role',
        message: 'What is the employee role?',
        type: 'list',
        choices: [`${ENGINEER}`, `${INTERN}`]
    },
    {
        name: 'github',
        message: 'What is the Engineer"s GitHub Username?',
        when: (answers) => answers.role === `${ENGINEER}`
    },
    {
        name: 'school',
        message: 'What is the Intern"s school?',
        when: (answers) => answers.role === `${INTERN}`
    },
    {
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        type: 'confirm',
        
    },

]