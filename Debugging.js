// const numbers = [45, 4, 9, 16, 25];
// for (let x in numbers) {
//   debugger;
//   console.log(numbers[x]) ; 
// }
// Default parameter

const add = (a=6 ,b=9)=>{
  return a +b
};


function another_func(callback_func){
  return callback_func
}

another_func(add)
