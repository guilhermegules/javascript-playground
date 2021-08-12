class Person {
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  greetings() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class User extends Person {
  constructor(name, birth, isAdmin) {
    super(name, birth);
    this._isAdmin = isAdmin;
  }

  get isAdmin() {
    return this._isAdmin ? "Admin" : "Common user";
  }

  set isAdmin(state) {
    this._isAdmin = state;
  }
}

const person = new Person("Guilherme", "1999-10-25");

person.greetings();

const user = new User("Guilherme Gules", "1999-10-25", false);

user.greetings();

console.log(user.isAdmin);

user.isAdmin = true;

console.log(user.isAdmin);
