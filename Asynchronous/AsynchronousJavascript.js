function multiply() {
    let mul = 'multiply ' + (3*2)
    console.log(mul)
}

function add() {
    let sum = 6+5
    console.log('addition done: ' + sum)
    return(sum)
    
}
function subtract() {
    console.log(9-4) ;
}

// multiply()
// add()
// subtract()

// Because javaScript setTimeout is asynchronous function it is going to take only 8000 ms  to execute these function 
// but if this would be synchronous programming then these function would take total
// 8000 + 4000 + 1000 ms = 13000 ms to execute...

// NOTE --->JavaScript is primarily a single-threaded language, which means it executes code sequentially in a single main thread. 
// However, 
// it also supports asynchronous programming through mechanisms like callbacks, promises, and async/await.

setTimeout(multiply,8000)
setTimeout(add,4000)
setTimeout(subtract,1000)

