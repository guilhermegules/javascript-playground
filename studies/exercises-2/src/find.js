const users = [
  { name: "Guilherme", age: 20, company: "ilegra" },
  { name: "Gabriel", age: 15, company: "Rocketseat" },
  { name: "Lucas", age: 30, company: "Facebook" },
];

const findingUser = users.find((user) => user.company === "ilegra");

console.log(findingUser);
