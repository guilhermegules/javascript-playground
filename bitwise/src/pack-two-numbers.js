const x = 12; // 0–255
const y = 200; // 0–255

// Shift x left 8 bits → [x.......]
// OR with y to insert into lower byte
const packed = (x << 8) | y;

console.log(packed); // 3320

// Unpack:
// >> 8 removes the lower byte → get x back
const unpackX = packed >> 8;

// & 0xFF masks only the last 8 bits → get y back
const unpackY = packed & 0xff;

console.log(unpackX, unpackY); // 12 200
