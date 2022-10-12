const Engineer = require('../lib/Engineer.js')

test("get engineer",() => {
    const engineer = new Engineer("Enoch", "410","enoch10evelyn@gmail.com","knock410")
    expect(engineer.name).toBe("Enoch")
    expect(engineer.getName()).toBe("Enoch")
    expect(engineer.id).toBe("410")
    expect(engineer.getId()).toBe("ID:410")
    expect(engineer.email)


}