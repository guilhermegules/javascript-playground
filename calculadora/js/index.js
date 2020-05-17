function addValue(value) {
  let operation = "";
  operation = value;
  const display = document.getElementById("display");
  const operations = document.getElementById("operation");
  if (["+", "-", "*", "/"].includes(operation)) {
    display.innerHTML = "";
  } else display.innerHTML += operation;
  operations.innerHTML += operation;
}

function calculate() {
  const operation = document.getElementById("operation");
  let numbers = operation.innerHTML.split(/[+*\/-]/g);
  let operator = operation.innerHTML.charAt(
    operation.innerHTML.search(/[+*\/-]/g)
  );
  let result = 0;
  if (["+", "-", "*", "/"].includes(operator) && numbers.length === 2) {
    switch (operator) {
      case "+":
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        break;
      case "-":
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        break;
      case "*":
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        break;
      case "/":
        result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        break;
    }
    document.getElementById("display").innerHTML = result;
  } else {
    document.getElementById("display").innerHTML = "Operação inválida ou não suportada no momento";
  }
}

function removeCharacter() {
  const operations = document.getElementById("operation");
  operations.innerHTML = operations.innerHTML.substr(
    0,
    operations.innerHTML.length - 1
  );
  const display = document.getElementById("display");
  display.innerHTML = display.innerHTML.substr(
    0,
    display.innerHTML.length - 1
  );
}

function purge() {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("operation").innerHTML = "";
}
