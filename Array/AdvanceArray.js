// Map
const array = [2,5,6,8,11,9,7,12]

const newArray = array.map((i) =>{
    return 5 *i
})
console.log(newArray)

const squareFunction = function(value){
    return value *value
}
const array2 = array.map(squareFunction);
console.log(array2)

// Filter method 
// Remember ---> there is no use of if else in filter
const filterArray = array2.filter((i)=>{
    return i%2 ===0
});

console.log(filterArray)



// Reduce method

const reduceArray = filterArray.reduce((accumulator,i)=>{
    return i/accumulator
},2)

console.log(reduceArray)