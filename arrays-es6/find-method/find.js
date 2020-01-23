const pessoas = [
  { id: 1, name: "Guilherme" },
  { id: 2, name: "João" },
  { id: 3, name: "Maicon" }
];

document.getElementById("title").innerHTML = `Utilizando find()`
document.getElementById("method").innerHTML = `Array utlizado: const pessoas = [
  { id: 1, name: "Guilherme" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Maicon" }
];`

document.getElementById("explanation-find-true").innerHTML = `pessoas.find(element => element.id === 3)`
document.getElementById("find-true").innerHTML = `Output: ${pessoas.find(element => element.id === 3)}`
document.getElementById("explanation-find-false").innerHTML = `pessoas.find(element => element.id === 7)`
document.getElementById("find-false").innerHTML = `Output: ${pessoas.find(element => element.id === 7)}`
