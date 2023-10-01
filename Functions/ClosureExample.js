// Use case of closure in  once function

var once = function(fn) {
    var called =  false;
	return function inside(...args){
        if(!called){
              called = true;
             return fn(...args)
        }else{
           return  undefined
        }
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn) 
console.log(onceFn) // [Function (anonymous)]
console.log(onceFn(1, 2, 3)); // 6 
console.log(onceFn)
console.log(onceFn(2,3,4)); // undefined
console.log(onceFn(7,8,9))  // undefined

// The function fn is called once only and after every subsequent call it returns undefined