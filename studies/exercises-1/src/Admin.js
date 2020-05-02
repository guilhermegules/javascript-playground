const User = require("./User");

class Admin extends User {
  admin = true;
}

module.exports = Admin;
