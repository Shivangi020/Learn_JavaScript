let yourAge = Number(prompt("Enter your Age"))

try{
    // throw Error
    if(isNaN(yourAge) || yourAge=="") throw "Enter valid number";
    if(yourAge < 18) throw "You are too young";
    if(yourAge>30) throw "You are too old";
   
}
catch(err){
   console.log(err) 
}finally{
    alert('Please follow the queue')
}