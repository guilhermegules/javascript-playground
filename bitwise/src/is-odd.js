function isOdd(n) {
  // AND with 1 isolates the last bit.
  // - If last bit = 1 → odd
  // - If last bit = 0 → even
  return (n & 1) === 1;
}

console.log(isOdd(5));
console.log(isOdd(10));
