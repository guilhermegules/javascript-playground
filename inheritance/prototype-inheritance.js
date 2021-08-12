function Dog(name, age, race) {
  this.name = name;
  this.age = age;
  this.race = race;
  this.bark = () => {
    console.log("Bark!!!");
  };
}

const akita = new Dog("Dude", 2, "Akita");

Dog.prototype.whatColor = function (color) {
  console.log(`My color is: ${color}`);
};

Dog.prototype.log = function () {
  console.log(
    `My name is ${this.name}, I'm have ${this.age} years old and my race is ${this.race}!`
  );
};

akita.bark();
akita.whatColor("Brown");
akita.log();

const beagle = new Dog("Ciri", 1, "Beagle");

beagle.log();
beagle.whatColor("white");
