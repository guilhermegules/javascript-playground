const name = "Guilherme";
const showName = () => console.log(name);

const person = {
  name,
  showName
}

person.showName();

const obj = {
  sum(x, y) { 
    return x + y;
  }
}

console.log(obj.sum(1, 2));

const prop = "prop";
// const objTest = {}; one way

// objTest[prop] = "prop value";

//Ecma 6 way
const objTest = {
  [prop]: "prop value"
}

console.log(objTest);
