const pessoas = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]

document.getElementById("title").innerHTML = `Utilizando filter(), method: pessoas.filter(element => element.name === "Mass");`
document.getElementById("method").innerHTML = `pessoas utilizado [${pessoas.name}]`
document.getElementById("foreach").innerHTML = `Output: ${pessoas.forEach(element => element.name)}`;

console.log(pessoas.forEach(element => element.name));