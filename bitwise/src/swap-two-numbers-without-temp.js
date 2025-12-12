let a = 7;
let b = 3;

// XOR swap steps
a = a ^ b; // a becomes XOR of a and b
b = a ^ b; // b becomes original a
a = a ^ b; // a becomes original b

console.log(a, b); // 3 7
