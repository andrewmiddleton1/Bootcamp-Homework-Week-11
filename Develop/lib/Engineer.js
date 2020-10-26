// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubuser) {
        super(name, id, email);
        this.githubuser = githubuser;

    }

    getGithub() {
        return this.githubuser;
    }

    getRole() {
        return "Engineer";
    } // Overridden to return 'Engineer'

}
module.exports = Engineer;