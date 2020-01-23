const every = ["a", "b", "c", "d", "e"];

every.every(x => x === "d");

document.getElementById("title").innerHTML = `Utilizando every(), every.every(x => x === "d");`
document.getElementById("method").innerHTML = `Array utilizado [${every}]`
document.getElementById("every").innerHTML = `Output: ${every.every(x => x === "d")}`;

const every2 = ["a", "a", "a", "a", "a"]

document.getElementById("title2").innerHTML = `Utilizando every(), every2.every(x => x === "a");`
document.getElementById("method2").innerHTML = `Array utilizado [${every2}]`
document.getElementById("every2").innerHTML = `Output: ${every2.every(x => x === "a")}`;