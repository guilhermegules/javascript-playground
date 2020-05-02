const company = {
  name: "ilegra",
  address: {
    city: "Porto Alegre",
    state: "RS",
  },
};

const {
  name,
  address: { city, state },
} = company;

console.log(name);
console.log(city);
console.log(state);
