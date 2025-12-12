let flags = 0b0101;

// Toggle bit 2
flags = flags ^ (1 << 2);
// If bit was 0 → becomes 1
// If bit was 1 → becomes 0

console.log(flags.toString(2).padStart(4, "0")); // "0001"
