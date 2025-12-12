let flags = 0b1010;
let flags2 = 0b0000;

// Mask = 1 << 3 = 1000
// AND isolates the bit, non-zero means TRUE
let isSet = (flags & (1 << 3)) !== 0;
let isSet2 = (flags2 & (1 << 3)) !== 0;

console.log(isSet); // true
console.log(isSet2); // false
