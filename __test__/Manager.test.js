const Manager = require('../lib/Manager.js')
//Manager tests
test("get manager", () => {
    const manager = new Manager("Enoch", "410", "enoch10evelyn@gmail.com", "6")
    expect(manager.name).toBe('Enoch')
    expect(manager.getName()).toBe('Enoch')
    expect(manager.id).toBe('410')
    expect(manager.getId()).toBe("ID: 410")
    expect(manager.email).toBe('enoch10evelyn@gmail.com')
    expect(manager.getEmail()).toBe("Email:<a href=\"mailto:enoch10evelyn@gmail.com\">enoch10evelyn@gmail.com</a>")
    expect(manager.officeNumber).toBe('6')
    expect(manager.getOfficeNumber()).toBe("Office #: 6")
})
