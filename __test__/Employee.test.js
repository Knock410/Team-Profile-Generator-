
const Employee = require('../lib/Employee.js')
//Employee tests
test('get employee ',() => {
    const employee = new Employee( 'Enoch', '410','enoch10evelyn@gmail.com')
    expect(employee.name).toBe('Enoch')
    expect(employee.getName()).toBe('Enoch')
    expect(employee.id).toBe('410')
    expect(employee.getId()).toBe('ID: 410')
    expect(employee.email).toBe('enoch10evelyn@gmail.com')
    expect(employee.getEmail()).toBe('Email:<a href="mailto:enoch10evelyn@gmail.com">enoch10evelyn@gmail.com</a>')});