// ES 6

const num =[1,2,3,4,5,7,8]
const[...rest] = num;

num.push(10) 


console.log(num) //  [1, 2, 3, 4, 5, 7, 8, 10]
console.log(rest) // [1, 2, 3, 4, 5, 7, 8]

// Because Spread operator just copy the array and object

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'Ford',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);