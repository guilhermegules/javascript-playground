const reduce = [2, 11, 33, 5];

reduce.reduce((total, value) => total * value);

document.getElementById("title").innerHTML = `Utilizando reduce(), reduceTest.reduce((total, value) => total * value);`
document.getElementById("method").innerHTML = `Array utilizado [${reduceTest}]`
document.getElementById("reduce").innerHTML = `Output: ${reduceTest.reduce((total, value) => total * value)}`;