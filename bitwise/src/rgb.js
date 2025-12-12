function rgb(r, g, b) {
  // r occupies bits 16-23
  // g occupies bits 8-15
  // b occupies bits 0-7
  return (r << 16) | (g << 8) | b;
}

const color = rgb(255, 100, 50);

// convert number to hex string
console.log(color.toString(16)); // "ff6432"
