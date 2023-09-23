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

// Because javaScript setTimeout is asynchronous function it is going to take only 8000 ms  to execute these 
// function but if javaScript would be synchronous programming then these function would take total
// 8000 + 4000 + 1000 ms = 13000 to execute...

// NOTE --->  Javascript is a Synchronous programming but here setTimeout is asynchronous function

setTimeout(multiply,8000)
setTimeout(add,4000)
setTimeout(subtract,1000)

