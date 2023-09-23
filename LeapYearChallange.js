var year = prompt("Enter year")

if(year%4 !==0){
    alert("Not a leap year")
}else if(year%100!==0){
    alert(year + " is a leap year")
}
else if(year%400===0 ){
    alert(year + " is a leap year")
}else{
    alert("Not a leap year")
}