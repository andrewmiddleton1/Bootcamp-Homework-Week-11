// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class manager extends employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() // Overridden to return 'Manager'

}