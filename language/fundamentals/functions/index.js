function checkAge(age) {
  return age > 18 ? true : confirm("Did your parens allow you?");
}

function checkAgeWithOr(age) {
  return age > 18 || confirm("Did your parens allow you?");
}

// console.log(checkAge(19));
// checkAge(16);

// checkAgeWithOr(10);
// console.log(checkAgeWithOr(20));

function minMax(min, max) {
  return min < max ? min : max;
}

// console.log(minMax(10, 20));
// console.log(minMax(10, -10));
// console.log(minMax(1, 2));

function pow(number, times) {
  let powNumber = number;
  for (let i = 1; i < times; i++) {
    powNumber *= number;
  }

  return powNumber;
}

console.log(pow(2, 4));
