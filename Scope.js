function scope(){
    var a ="hello"
    console.log(a) 
}
// Root scope ---> Windows
// Child scope ---> Anything have curly braces . Eg function (){}

var fun = 5
 
function funFunction(){
    var fun = "Hello"
    console.log(1,fun)
}  

function funerFunction(){
    var fun ="Bye"      //declaring variable fun
    console.log(2,fun)
}

function funestFunction(){
   fun = "notcoming" //This means we are modifying Variable fun
    console.log(3,fun)
}

console.log("window " + fun) // window 5
funFunction() // 1 Hello
funerFunction() // 2 Bye
funestFunction() // 3 notcoming
scope() // hello 
console.log(fun) // notcoming