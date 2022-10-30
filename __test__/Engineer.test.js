const Engineer = require("../lib/Engineer.js");
//Engineer tests
test("get engineer", () => {
  const engineer = new Engineer(
    "Enoch",
    "410",
    "enoch10evelyn@gmail.com",
    "knock410"
  );
  expect(engineer.name).toBe("Enoch");
  expect(engineer.getName()).toBe("Enoch");
  expect(engineer.id).toBe("410");
  expect(engineer.getId()).toBe("ID: 410");
  expect(engineer.email).toBe("enoch10evelyn@gmail.com");
  expect(engineer.getEmail()).toBe(
    'Email:<a href="mailto:enoch10evelyn@gmail.com">enoch10evelyn@gmail.com</a>'
  );
  expect(engineer.github).toBe("knock410");
  expect(engineer.getGithub()).toBe(
    'GitHub: <a href="https://github.com/knock410" target="_blank">github.com/knock410</a>'
  );
});
