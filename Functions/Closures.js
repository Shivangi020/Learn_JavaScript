// Function along with its lexical scope is called closure

// closure is the combination of a function bundled together (enclosed) with references to its surrounding state (Lexical environment)

function x(){
    var a = 20;

    function y(){
        console.log(a);
    }

    return y;
}


var z = x(); 
console.log(z); // [Function: y]
z(); // 20 


// Even though function x is not in call stack , function y still remembers its lexical environment that is from where it comes.
// Actually what happens is that when function x returns  function y , it not only returns a function but a clouser is returned that is
// function binded with its lexical environment.



// Use Case of Closure --> 
// Module Design pattern
// Currying
// Functions like once
// memoize
// maintaining state in async world
// SetTimeouts
// Iterators and many more ......


