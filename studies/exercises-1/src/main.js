const User = require("./User");
const Admin = require("./Admin");

const user = new User("guilhermegules@gmail.com", "123456");
const admin = new Admin("admin@gmail.com", "12345");

console.log(user.isAdmin());
console.log(admin.isAdmin());
