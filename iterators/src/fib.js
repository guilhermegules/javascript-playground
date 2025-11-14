function* fib() {
  let v1 = 1;
  let v2 = 1;

  while (true) {
    const current = v2;
    v2 = v1;
    v1 = v1 + current;
    yield current;
  }
}

const fibonacci = fib();

console.log(fibonacci.next().value); // 1
console.log(fibonacci.next().value); // 1
console.log(fibonacci.next().value); // 2
console.log(fibonacci.next().value); // 3
console.log(fibonacci.next().value); // 5
console.log(fibonacci.next().value); // 8
console.log(fibonacci.next().value); // 13
