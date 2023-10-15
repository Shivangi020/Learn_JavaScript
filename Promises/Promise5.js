
// the executor function is executed immediately by the internal engine as soon as the Promise() constructor is called.
var timerPromise = new Promise(function(resolve, reject) {
    let p = setTimeout(function() {
       resolve ('Hello');
    }, 3000);
   
 });

 console.log(timerPromise , typeof(timerPromise)) // Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined}

 setTimeout(()=>{
    console.log(timerPromise) // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'Hello' }
 },6000)

console.log("bye") 
timerPromise.then(function(value){
    console.log(value)
})

// Example of using Promise for adding two promise
 var addTwoPromises =  function(promise1, promise2) {

    console.log(promise1.then() ,'this') // returns promise object
    let sum= promise1.then().then((a)=> promise2.then(data =>  {return a+data})
    )
    return sum
};
 var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

let res = addTwoPromises(promise1, promise2).then((value)=>console.log(value));
console.log(res,"add");