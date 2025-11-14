const person = {
  name: "Ana",
  age: 25,
  city: "Madrid",
  [Symbol.iterator]: function* () {
    yield Array.from(Object.entries(this)).filter(
      (v) => typeof v !== "function",
    );
  },
};

for (const entry of person) {
  console.log(entry);
}
