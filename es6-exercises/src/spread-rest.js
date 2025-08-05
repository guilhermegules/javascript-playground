const multiply = (...rest) => rest.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => multiply(...rest);

console.log(sum(5, 2, 3, 6));

const str = "Digital inovation";
const arr = [1 , 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8];

const logArgs = (...args) => console.log(args);

logArgs(...str);
logArgs(...arr);
console.log(arr2);

const obj = {
  test: 123
}

const obj2 = {
  ...obj,
  test2: "Hello"
}

console.log(obj2);

