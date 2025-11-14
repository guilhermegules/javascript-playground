function* cycle(array) {
  for (let i = 0; i <= array.length; i++) {
    if (i === array.length) {
      i = 0;
    }
    yield array[i];
  }
}

const c = cycle(["A", "B", "C"]);
console.log(c.next().value); // A
console.log(c.next().value); // B
console.log(c.next().value); // C
console.log(c.next().value); // A (start again)
console.log(c.next().value); // B
console.log(c.next().value); // C
