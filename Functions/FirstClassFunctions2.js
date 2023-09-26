
// Example --->
function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }


  let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];


console.log('Products sorted by name:');
products.sort(compareBy('price'));

console.table(products);

// ┌─────────┬──────────────────┬───────┐
// │ (index) │       name       │ price │
// ├─────────┼──────────────────┼───────┤
// │    0    │  'Sony Xperia'   │  700  │
// │    1    │ 'Samsung Galaxy' │  850  │
// │    2    │     'iPhone'     │  900  │
// └─────────┴──────────────────┴───────┘


// Example 2 --->

var add = function(a,b){
    return a + b ;
}

var subtract = function(a,b){
    return a - b ;
}

function calculator(a, b , fn){
     return fn(a,b);
}

let ans1 = calculator(100,200,add);
console.log(ans1);

let ans2 = calculator(100,200,subtract);
console.log(ans2);