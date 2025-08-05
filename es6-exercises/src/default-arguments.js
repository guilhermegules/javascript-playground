const randomNumber = () => {
  console.log("Generating a random number...");
  return Math.random() * 10;
}

const multiply = (a, b = randomNumber()) => a * b;

console.log(multiply(5));
console.log(multiply(5));
console.log(multiply(5));
