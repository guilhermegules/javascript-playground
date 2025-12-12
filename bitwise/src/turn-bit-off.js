let flags = 0b1101; // initial bits

// Turn OFF bit 2
flags = flags & ~(1 << 2);
// (1 << 2) = 0b100
// ~(0b100) = 0b...011

console.log(flags.toString(2)); // "1001"
console.log(~(1 << 2).toString(2)); // "-101"
