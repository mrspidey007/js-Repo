var num1 = prompt("Enter a value");
var num2 = prompt("Enter b value");
var num3 = prompt("Enter c value");
function number() {
  if (num1 > num2 || num1 > num3) {
    document.write(num1, " is the largest number");
    document.write("<br><br>");
  } else if (num2 < num3) {
    document.write(num3, " is the largest");
    document.write("<br><br>");
  } else {
    document.write(num2);
  }
}
number();