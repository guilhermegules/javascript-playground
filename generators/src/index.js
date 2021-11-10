function* hello() {
  console.log("Hello");
  yield 1;
  console.log("From");
  const value = yield 2;
  console.log(value);
  yield 3;
}

const it = hello();

console.log("Example 1 \n");

console.log(it.next());
console.log(it.next());
console.log(it.next("Outside!"));

console.log("\nExample 2 \n");

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

console.log("\nExample 3 \n");

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

console.log("\nExample 4 \n");

const array = ["0", "1", "4", "a", "9", "c", "16"];
const myObject = {
  [Symbol.iterator]: function* () {
    for (let index of array) {
      yield `${index}`;
    }
  },
};

const all = [...myObject]
  .map((index) => parseInt(index, 10))
  .map(Math.sqrt)
  .filter((index) => index < 5)
  .reduce((prev, act) => prev + act);

console.log(all);
