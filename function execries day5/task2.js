var side1=prompt("enter side1 value")
var side2=prompt("enter side2 value")
var side3=prompt("enter side3 value")

function sides(){
    if(side1==side2 && side2==side3){
        document.write("Equilateral triangle");

    }

    else if(side1==side2 || side2==side3){
        document.write("Isosceles triangle");
        
    }
    else {
        document.write("Scalene triangle");
        
    }

}
sides()