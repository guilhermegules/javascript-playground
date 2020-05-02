const users = [
  { name: "Guilherme", age: 20, company: "ilegra" },
  { name: "Gabriel", age: 15, company: "Rocketseat" },
  { name: "Lucas", age: 30, company: "Facebook" },
];

const reducing = users.reduce((user) => {
  user.age * 2;
  if (user.age <= 50) return user;
});

console.log(reducing);
