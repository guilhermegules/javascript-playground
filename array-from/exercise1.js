function numbersToArray() {
  if (arguments.length === 0) return [];

  return Array.from(arguments);
}

console.log(numbersToArray(1, 2, 3, 4, 5, 6, 7));

console.log(Array.from({ length: 7 }, (_, key) => key));

console.log(Array.from("1234567"));
