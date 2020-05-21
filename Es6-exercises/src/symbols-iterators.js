const uniqueId = Symbol("Hello");

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
          done: i > this.values.length
        }
      }
    }
  }
};

for(let item of obj2) {
  console.log(item);
}
