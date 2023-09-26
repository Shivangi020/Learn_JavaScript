// JavaScript Functions are First-Class Citizens
// first class function ---> The ability of function to use as value is called first class function
// where function is passed as value or returned from another functions


// 1. We can store functions as a variable
var sum = function(){
    console.log (6+8);
}

var add = sum;
add(); // 14
sum() ; // 14

// 2. We can pass the function as an arguments
function a(param1) {
    console.log(param1);
}

a(function(){

});  // [Function (anonymous)]


a(sum) // [Function: sum]



// We can return functions from other functions as value 
var b = function(){
    return function(){

    }
}


console.log(b);
// ƒ (){ return function(){} }

console.log(b());
// ƒ (){}


// Eg .. from leetcode --> https://leetcode.com/problems/function-composition/

var compose = function(functions) {
    
	return function(x) {
        result = x;
        for(var i = functions.length-1 ; i>=0 ;i--){
            result = functions[i](result)
        }

        return result;
    }
};

var fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4))   // 65

var fn2 = compose([]);
console.log(fn2(5)); // 5