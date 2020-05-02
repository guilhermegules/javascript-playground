## The problem

The class User must have two param in the constructor, email and pass, and note them in proprients fro mthe class, class admin dont receive params but neew repass params of email and pass, and check the propertie "admin" wit true;

Now in the class User make a function called `isAdmin` with return if is a user a admin or not;

- Sample
`
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true`

- Installing all dependencies `npm install`;
- Running app `node ./src/main.js`