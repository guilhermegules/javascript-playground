class User {
  email = "";
  pass = "";
  admin = false;
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }

  isAdmin() {
    return this.admin;
  }
}

module.exports = User;
