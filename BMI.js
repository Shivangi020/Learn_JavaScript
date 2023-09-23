var weight = prompt("Write your weight(in kg)")
var height = prompt("Write your height(in m)")

function bmiCalculator(weight,height){
   var bmi = weight/heightSquare(height);
   return bmi 
}

function heightSquare(height){
    var heightCalc = height** 2;
    return heightCalc;
}


alert("your body mass index is: " + bmiCalculator(weight,height))