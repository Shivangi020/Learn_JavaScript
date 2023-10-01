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