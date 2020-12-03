const chalk = require('chalk');
module.exports = [
    {
        name: 'name',
        message: `'What is the ${chalk.underline.redBright("Manager")} name? '`,
    },
    {
        name: 'id',
        message: 'What is the Manager ID?'
    },
    {
        name: 'email',
        message: "What is the Manager's email?"
    },
    {
        name: 'officeNumber',
        message: 'What is the Manager office number?'
    },

]