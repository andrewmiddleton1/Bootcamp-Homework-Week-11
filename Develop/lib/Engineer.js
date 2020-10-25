// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(githubusername) {
        this.githubusername = githubusername;
        super(name, id, email);
    }

    getGithub() {
        return this.githubuswername;
    }

    getRole() {
        return "Engineer";
    } // Overridden to return 'Engineer'

}
module.exports = Engineer;