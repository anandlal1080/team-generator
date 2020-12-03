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
        message: 'What is the Inter school?',
        when: (answers) => answers.role === "Intern"
    },

]