const numbers = [[1], [2], [3], [4], [5]];

console.log(numbers.flatMap(arr => arr * 10));

console.log(numbers.flat().map(arr => arr * 10));
