const pessoas = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" }
];

document.getElementById(
  "title"
).innerHTML = `Utilizando filter(), method: pessoas.filter(element => element.name === "Mass");`;
document.getElementById("method").innerHTML = `Array utilizado: [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" }
];`;
document.getElementById("filter").innerHTML = `Output: 
Array(2)
0: {id: 3, name: "Mass"}
1: {id: 4, name: "Mass"}
length: 2`;

console.log(pessoas.filter(element => element.name === "Mass"));
