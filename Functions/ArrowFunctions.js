// ES6 arrow functions provide an alternative way to write a shorter syntax compared to the function expression.

let add = (a,b)=>{
    return a+b;
}

console.log(add(78,98));

console.log(typeof(add)) // functions

console.log(add instanceof Function) // true


// Example --->
let arr = [84,74,12,98,63,54];

arr.sort((a,b)=>{return a-b})
console.log(arr)  // [ 12, 54, 63, 74, 84, 98 ]