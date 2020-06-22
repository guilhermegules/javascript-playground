function* hello() {
  console.log("Hello");
  yield 1;
  console.log("From");
  const value = yield 2;
  console.log(value);
  yield 3;
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next("Outside!"));

function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const natural = naturalNumbers();

console.log(natural.next());
console.log(natural.next());
console.log(natural.next());
console.log(natural.next());
console.log(natural.next());
console.log(natural.next());

const object = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};

for (let value of object) {
  console.log(value);
}
