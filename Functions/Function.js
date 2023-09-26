// Hoisting
// The difference in function statement and function expression is hoisting

console.log(a) // [Function: a]
a(); // a is called

console.log(b) // Undefined
b(); // TypeError: b is not a function




// Function Statement or Function Declaration --------->
function a(){
    console.log('a is called')
}

a();


// Function Expression ----------->
var b = function(){
    console.log('b is called')
}

b();



// Anonymous Function ----------->
// The below function is anonymous function but it will throw error
// function () {} 
// SyntaxError: Function statements require a function name
// Anonymous function is required when they are needed as values means we can assign it to a variable


// Named Function Expression ----------------->
var c = function greet(){
    console.log("hello")
    console.log(greet) // [Function: greet]
    // this greet can be accessed here but not outside this scope and we can not call this greet() other than here
}

c() ; // hello
greet(); // ReferenceError: greet is not defined  // WHY?????????
// because the greet() have not global scope here . It is created in function scope of var c



// Difference between Parameters & Arguments ??????????
// these identifier param1 and param2 are called  Parameters
function d(param1 , param2){
   console.log(param1,param2)
}

// the value which we pass while calling a function is called Arguments
// in this case 5 , 9 are arguments

d(5,9)

