var year=Number(prompt("enter the year"))
var month=Number(prompt("enter the month"))

function findDaysInMonth(){

    if(month==1 || month==3 ||month==5 || month==7 || month==8 || month==10 || month==12){
        document.write("<h1> 31 days </h1>")

        document.write("<br>")
    }

   else if(month==2 && year%4==0){
        document.write("<h1>29 days</h1>")
        document.write("<br>")
    }

    else if(month==2 && year%4!==0){
        document.write("<h1>28 days</h1>")
        document.write("<br>")

    }

    else if(month==4 || month==6 || month==9 || month==11){
        document.write("<h1>30 days</h1>")
        document.write("<br>")
    }

    else {
        document.write("<h1>Invalid month</h1>")
        document.write("<br>")
    }

}
findDaysInMonth()