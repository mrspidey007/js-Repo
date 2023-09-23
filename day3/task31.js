var num1=prompt("enter number1");
var num2=prompt("enter number2");

if(num1>num2){
    document.write("<h1>", num1, "is the largest <h1>")
}

else if (num1<num2){
    document.write("<h1>", num2, " is the largest <h1>")
}
else{
    document.write("<h1>", num1," and ", num2, " is equal <h1>")
}