
// Block Scope
{
  const x = "hello world"
  var y = "Bye world"
}

console.log(x) // ReferenceError: x is not defined
console.log(y) // Bye world


// Function Scope
function myFunction() {
  const name = "Shiv"
  var carName = "Volvo";

}
myFunction()
console.log(carName) // ReferenceError: carName is not defined
console.log(name) // ReferenceError: name is not defined