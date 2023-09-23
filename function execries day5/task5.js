var year=Number(prompt("enter the year"))

function checkleapyear(){

    if (year%4==0 || year%400==0 && year%100 !==0){
        document.write("<h2> ",year," leap year </h2>")
    }

    else{
        document.write("<h2> ",year," not a leap year </h2>")
    }
}
checkleapyear()