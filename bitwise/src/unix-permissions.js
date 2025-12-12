// Each permission is one bit
const READ = 1 << 0; // 001
const WRITE = 1 << 1; // 010
const EXEC = 1 << 2; // 100

// Give user READ + EXEC permissions
let userPermissions = READ | EXEC; // 101

// Check if has EXEC: AND isolates bit
if (userPermissions & EXEC) {
  console.log("User can execute");
}

// Add WRITE: OR sets bit to 1
userPermissions |= WRITE; // 111

// Remove EXEC: AND with NOT mask clears bit
userPermissions &= ~EXEC; // 011

console.log(userPermissions.toString(2)); // "011"
