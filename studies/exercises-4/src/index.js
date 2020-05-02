const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(sum(4, 3, 5, 8, 1));
console.log(sum(10, 5, 5, 1, 1));
console.log(sum(20, 3, 5, 2, 1));
console.log(sum(1, 2, 3, 4, 5));
