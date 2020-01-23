const pessoas = [
  { id: 1, name: "Guilherme" },
  { id: 2, name: "João" },
  { id: 3, name: "Maicon" }
];

document.getElementById("title").innerHTML = `Utilizando findIndex()`
document.getElementById("method").innerHTML = `Array utlizado: const pessoas = [
  { id: 1, name: "Guilherme" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Maicon" }
];`
document.getElementById("explanation-find-index-true").innerHTML = `pessoas.findIndex(element => element.id === 3)`
document.getElementById("find-index-true").innerHTML = `Output: ${pessoas.findIndex(element => element.id === 3)} true`
document.getElementById("explanation-find-index-false").innerHTML = `pessoas.findIndex(element => element.id === 7)`
document.getElementById("find-index-false").innerHTML = `Output: ${pessoas.findIndex(element => element.id === 7)} false`
