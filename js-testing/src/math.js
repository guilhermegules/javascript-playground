class Math {
  sum = (number1, number2, callback) =>
    setTimeout(() => callback(number1 + number2), 2500);
  multiply = (number1, number2) => number1 * number2;
  printSum = (req, res, a, b) => res.load("index", a + b);
}

module.exports = Math;
