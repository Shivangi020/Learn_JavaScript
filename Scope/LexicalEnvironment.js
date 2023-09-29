// Lexical Environment : Environment based on source code
// The lexical environment of a given function is based on the source code of the program — where the function is defined not where the function is called.
  

var a = 'dynamic' 

function f1(){
    console.log(a);
}


function f2(){
    var a = 'static';
    
    function f3(){
        console.log(a);
    }
    f3(); // static
    f1(); // dynamic
}

f2(); // dynamic


/**
 * First the local scope of f1 is searched for the name a. Trivially,because this local environment is empty, no such name is found. 
 * Consequently, searching moves to the lexical environment of f1 that is Global
 * hence searching is conducted here in global for the name a. Since a match is found, , 
 * the name a in console.log(a) = dynamic .
 * 
 * 
 * for f3 its Lexical environment is f2 , hence a = static
 * 
 * for f2 its Lexical environement is global
 */


  /*
    * The lexical environment is determined once and then fixed for the entire course of the program. 
    *  This is why JavaScript is called a statically-scoped language — 
    *  the places where given names (of variables and functions) are accessible in a program are static (i.e. don't change) 
    *  and governed by the source code.
    */ 