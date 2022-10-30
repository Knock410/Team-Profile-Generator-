const Employee = require("./Employee")

//Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.github = gitHub
    }
    getGithub() {
        return `GitHub: <a href="https://github.com/${this.github}" target="_blank">github.com/${this.github}</a>`
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer
