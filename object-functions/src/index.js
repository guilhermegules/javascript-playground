const user = {
  name: "Guilherme",
  lastname: "Gules",
};

// Merge object proprieties
Object.assign(user, { fullName: "Guilherme Gules" });

console.log("\nAdd proprietie fullName to user", user);
console.log(
  "\nReturn a new object merging two or more objects",
  Object.assign({}, user, { age: 20 })
);

// Prevents objects alteration
const newObject = { foo: "bar" };
Object.freeze(newObject);

newObject.foo = "changes";
delete newObject.foo;
newObject.bar = "foo";

console.log("\nconst newObject after alterations:", newObject);

// Allow only alterations on existents proprieties on object
const person = { name: "Guilherme" };
Object.seal(person);

person.name = "Guilherme Gules";
delete person.name;
person.age = 20;

console.log("\nVariable person after alterations:", person);
