const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name,id, email, officeNumber) {
        super(name,id,email)
        this.officeNumber = officeNumber
    };

    getofficeNumber() {
        return `office #: ${this.officeNumber}`
    } 
    
    getPosition() {
        return "Manager"
    }
}

module.exports = Manager
