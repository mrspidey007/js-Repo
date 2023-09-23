var num1 = parseInt(prompt("enter num1 value"));
var num2 = parseInt(prompt("enter num2 value"));
var operator = prompt("enter the operator");

function evalnumbers() {
  if (operator === "add") {
    document.write("<h2> ", num1 + num2, "</h2> ");
  } else if (operator === "subtract") {
    document.write("<h2> ", num1 - num2, "</h2> ");
  } else if (operator === "multiply") {
    document.write("<h2>", num1 * num2, "</h2> ");
  } else if (operator === "divide") {
    document.write("<h2> ", num1 / num2, "</h2> ");
  } else if (operator === "modulus") {
    document.write("<h2> ", num1 % num2, "</h2> ");
  } else {
    document.write("<h2>invalid operation</h2>");
  }
}
evalnumbers();