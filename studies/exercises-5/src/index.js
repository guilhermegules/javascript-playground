const user = {
  name: "Guilherme",
  age: 20,
  address: {
    city: "Gravataí",
    state: "RS",
    country: "Brasil",
  },
};

console.log(user);

const user2 = {
  ...user,
  name: "João",
};

console.log(user2);

const user3 = {
  ...user,
  address: {
    city: "Canoas",
  },
};

console.log(user3);
