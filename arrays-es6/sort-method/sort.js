const numbers = [5, 3, 9, 2, 1];

document.getElementById("sort-growing").innerHTML = numbers.sort((a, b) => a - b);

document.getElementById("sort-decreasing").innerHTML = numbers.sort((a, b) => b - a);