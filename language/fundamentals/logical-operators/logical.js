// What's the result of OR?
console.log(null || 2 || undefined); // 2

// What's the result of OR'ed console.logs?
console.log(console.log(1) || 2 || console.log(3)); // 1 2

// What is the result of AND?
console.log(1 && null && 2); // null

// What is the result of AND'ed console.logs?
console.log(console.log(1) && console.log(2)); // 1 undefined

// The result of OR AND OR
console.log(null || (2 && 3) || 4); // 3
