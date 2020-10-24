// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class engineer extends employee {
    constructor(github) {
        this.github = github;
    }

    getGithub()

    getRole() // Overridden to return 'Engineer'

}
module.exports = engineer;