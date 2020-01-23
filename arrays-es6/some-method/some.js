const some = [1, 2, 3, 4, 5, 6, 7, 8];

document.getElementById("title").innerHTML = `Utilizando some(), method = some.some(x => x === 1)`
document.getElementById("method").innerHTML = `Array utilizado [${some}]`
document.getElementById("some-test").innerHTML = `Output: ${some.some(x => x === 1)}`;