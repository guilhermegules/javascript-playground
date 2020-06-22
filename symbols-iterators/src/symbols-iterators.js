// Symbols
const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");

// Return false, symbols are always diferents
console.log(uniqueId === uniqueId2);

// Well known Symbols
// with theses we can add proprieties for objects
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const obj = {
  [uniqueId]: "Hello",
};

console.log(obj);

const arr = [1, 2, 3, 4];

const obj2 = {
  values: [...arr],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};

for (let item of obj2) {
  console.log(item);
}

// Iterators
const arr2 = [1, 2, 3, 4];

for (let value of arr2) {
  console.log(value);
}

const text = "Testing some iterators";
for (let value of text) {
  console.log(value);
}

// Iterators and objects
const iterable = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;
        return {
          value: this.values[i - 1],
          done: i === this.values.length,
        };
      },
    };
  },
};

const it = iterable[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
