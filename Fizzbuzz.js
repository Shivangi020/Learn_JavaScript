var output = [];
var num = 1;
function fizzbuzz(){
    while(num<=100){
//     while the given condition is true
//     Keep running below block of code
        
    if(num%5===0 && num%3===0){
       output.push("fizzBuzz")
    }else if(num%5===0){
        output.push("buzz")
    }else if(num%3===0){
        output.push("fizz")
    }
    else{
        output.push(num)
    }
     num++;
}
  
 return output;
}
fizzbuzz()
