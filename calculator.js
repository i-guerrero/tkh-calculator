// Calculator created by Isaac Guerrero 10/11/2022

// operator functions
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let result;
  if (operator === "+") {
    result = add(a, b);
  } else if (operator === "-") {
    result = subtract(a, b);
  } else if (operator === "*") {
    result = multiply(a, b);
  } else if (operator === "/") {
    result = divide(a, b);
  }
  console.log(result);
  return result;
}

// Displays values when buttons are clicked
const display = document.querySelector("input");
const numbers = document.querySelectorAll(".numbers");

console.log(numbers);
console.log(typeof numbers[0].value);

for (let num of numbers) {
  num.addEventListener("click", (event) => {
    display.value += num.value;
  });
}

// Implement operate
const operators = document.querySelectorAll(".operators");

// create an array to hold values
let values = [];
let operations = [];

for (let op of operators) {
  op.addEventListener("click", (event) => {
    values.push(display.value);
    operations.push(op.value);
    console.log(values, operations);
    display.value = "";
  });
}

// Implement equals
document.querySelector("#equals").addEventListener("click", () => {
  let result = values[0];
  for (let i = 0; i < values.length - 1; i++) {
    result = operate(operations[i], result, values[i + 1]);
    // display result after each iteration
    display.value = result;
    // result += operate(operations[i], values[i], values[i + 1]);
    // console.log(result);
  }
  console.log(result);
  values = [];
  operations = [];
});

// Tests
// console.log(divide(10, 2));
