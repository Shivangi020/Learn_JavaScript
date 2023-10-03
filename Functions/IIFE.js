// IIFE -->  Immediately Invoked Function Expression

// pronounces Iffy by ben Alman who introduced it
// A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation
// Immediately Invoked Function Expression is a good way at protecting the scope of function and the variables within it

// IIFE variations --------------->
// 1. anonymous arrow function inside parenthesis
(()=>{
    console.log("arrow function as IIFE")
})();

// 2. No Named anonymouse function expression
(function(){
   console.log("anonymous function as IIFE");
})();

// Function declaration 
(function iife(num){
     console.log(num);

})(41);




// Normal function
function addTogether() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
}
addTogether();


/**
 * the first thing to mention here is that, in the above example, 
 * our variables are safe — safe insofar that they are immutable.
 * So that’s great, our variables cannot be accessed, but how do we make it so that our function also cannot be accessed.
 * That’s where IIFE’s come in.
 * */ 

// IIFE 
// once we’ve created an IIFE, we have no intention of calling the function again ,So let’s get rid of the name
(function () {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
})();



// IIFE in actions

const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply
    }
})();

const add = calculator.add(9,10);
const multiply = calculator.multiply(9,10);
console.log(add,multiply);
