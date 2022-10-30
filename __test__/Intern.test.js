const Intern = require("../lib/Intern.js");
//Intern tests
test("get intern", () => {
  const intern = new Intern(
    "Enoch",
    "410",
    "enoch10evelyn@gmail.com",
    "Columbia"
  );
  expect(intern.name).toBe("Enoch");
  expect(intern.getName()).toBe("Enoch");
  expect(intern.id).toBe("410");
  expect(intern.getId()).toBe("ID: 410");
  expect(intern.email).toBe("enoch10evelyn@gmail.com");
  expect(intern.getEmail()).toBe(
    'Email:<a href="mailto:enoch10evelyn@gmail.com">enoch10evelyn@gmail.com</a>'
  );
  expect(intern.school).toBe("Columbia");
  expect(intern.getSchool()).toBe("School: Columbia");
});
