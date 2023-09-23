var mark=Number(prompt("enter your mark"))

function findgrade(){

    if(mark>=90 && mark<=100){
        document.write("<h3> ", mark, " is S grade <h3>")
    }

    else if(mark>=80 && mark<=90){
        document.write("<h3> ", mark, " is A grade </h3>")
    }

    else if(mark>=70 && mark<=80){
        document.write("<h3> ", mark, " is B grade </h3>")
    }
    else if(mark>=60 && mark<=70){
        document.write("<h3> ", mark, " is C grade </h3>")
    }
    else if(mark>=50 && mark<=60){
        document.write("<h3> ", mark, " is D grade </h3>")
    }
    else if(mark>=40 && mark<=50){
        document.write("<h3> ", mark, " is E grade </h3>")
    }
    else if(mark>=0 && mark<=40) {
        document.write("<h3> ", mark, " you have fail grade </h3>")
    }
    else  {
        document.write("<h3> ", mark, " is invalid </h3>")
    }


}
findgrade()
