// In JavaScript, we can use  'this' keyword in the global and function contexts. 
// 'this' references the object of which the function is a property. 
// In other words, the 'this' references the object that is currently calling the function.


// 1. 'this' in METHODS
// To access the object, a method can use the 'this' keyword.
let counter = {
    count : 0,
    next : function(){
        return ++this.count;
    }

}

console.log(counter.next()); // 1


let user = {
    name : 'Shiva',
    age:20,
    greet:function(){
        return 'Hello! ' + this.name;
    }
    
}

console.log(user.greet()); // Hello! Shiva


// 2. Global context
// In the global context, the 'this' references to the global object, which is the window object on the web browser 
// or global object on Node.js.


// 3. 'this' in FUNCTION
// When a function is declared, it may use 'this', but that 'this' has no value until the function is called.
// 'this' is not bound
// In JavaScript 'this' is “free”, its value is evaluated at call-time 
// and does not depend on where the method was declared, but rather on what object is “before the dot”.

// In the non-strict mode, the 'this' references the global object when the function is called 
// In the strict mode, JavaScript sets the 'this' inside a function to undefined
function sayHi() {
    console.log(this==global);
}
sayHi() // true

user.f = sayHi;
user.f() // false;


// 4. 'this' in Arrow Function
// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.



// 5. 'this' in object literal
function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user1 = makeUser();
  
console.log(user1.name); // John
console.log(user1.ref()); // { name: 'John', ref: [Function: ref] }

