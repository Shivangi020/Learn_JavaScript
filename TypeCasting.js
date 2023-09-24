let a = 8 ;
let b = '4' ;
let c = a + b ;

console.log(c); // 84 --> because of Type Coercion
// here javaScript coerce the variable a into string itself so that two comodities can add together 


// To add both variable as in mathematical we need to Type cast variable b into Number
let d = a + Number(b);
console.log(d); // 12


console.log(Number("hello")) // NaN


console.log('("3" + "1") = ' + ("3" + "1")); // ("3" + "1") = 31
console.log('("3" + 1) = ' + ("3" + 1)); // ("3" + "1") = 31
console.log('("3" + null) = ' + ("3" + null)); // ("3" + null) = 3null

console.log('("3" - "1") = ' + ("3" - "1")); // ("3" - "1") = 2
console.log('("3" - 1) = ' + ("3" - 1));  // ("3" - 1) = 2
console.log('("3" - null) = ' + ("3" - null)); // ("3" - null) = 3
console.log('("3" - "null") = ' + ("3" - "null")); // ("3" - "null") = NaN


console.log('("3" * "2") = ' + ("3" * "2")); // ("3" * "2") = 6
console.log('("3" % "2") = ' + ("3" % "2"));  // ("3" % "2") = 1


