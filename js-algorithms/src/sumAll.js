/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus 
the sum of all the numbers between them. 
The lowest number will not always come first.
*/

// function sumAll([first, last]) {
//   const step = first - last < 0 ? 1 : -1;
//   return first !== last ? first + sumAll([first + step, last]) : first;
// }

// function sumAll(arr) {
//   const max = Math.max(arr[0], arr[1]);
//   const min = Math.min(arr[0], arr[1]);
//   let sum = 0;
//   for(let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumAll(arr) {
//   let sum = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

function sumAll(arr) {
  const startNumber = arr[0];
  const endNumber = arr[1];

  const numberCount = Math.abs(startNumber - endNumber) + 1;

  const sum = ((startNumber + endNumber) * numberCount) / 2;
  return sum;
}

console.log(sumAll([1, 4]));
