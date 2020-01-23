const mapTesting = [5, 4, 3, 2, 1];

mapTesting.map(x => x * x);

document.getElementById("title").innerHTML = `Utilizando map(), mapTesting.map(x => x * x);`
document.getElementById("method").innerHTML = `Array utilizado [${mapTesting}]`
document.getElementById("map").innerHTML = `Output: ${mapTesting.map(x => x * x)}`;