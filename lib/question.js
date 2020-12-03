module.exports = [
    {
        name: 'name',
        message: 'What is the employee name? '
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
        choices: ['Engineer', 'Intern']
    },
    {
        name: 'github',
        message: 'What is the employee GitHub Username?',
        when: (answers) => answers.role === "Engineer"
    },
    {
        name: 'school',
        message: 'What is the Intern school?',
        when: (answers) => answers.role === "Intern"
    },
    {
        name: 'addmore',
        message: 'Would you like to add another Employee?',
        type: 'confirm',
        
    },

]