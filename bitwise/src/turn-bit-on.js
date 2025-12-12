let flags = 0b0101; // current bits: 5

// Turn ON bit 2 (counting from 0)
flags = flags | (1 << 3);
// (1 << 3) generates 0b100 (4)

console.log(flags.toString(2)); // "1101" (bit turned on)
console.log((1 << 3).toString(2)); // "1000" (bit turned on)
