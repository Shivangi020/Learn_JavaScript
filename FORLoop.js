
// for in
const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
  
  console.log(numbers[x]) ; 
}

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(person[x]);
}


// for of (only for iterables)
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
 console.log(x) ;
}


// for Each (it is a array method)

let array1 = [5,6,9,3];
let newArray = []

array1.forEach(square1);

let square = (value) => {
  let squareValue = value**2
  newArray.push(squareValue)
}

function square1(value){
  let squareValue = value**2
  newArray.push(squareValue)
}

console.log(newArray)