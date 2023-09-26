// var n = Math.random();
// console.log(n);
// var num = 6 * n;
// var roundNum = Math.floor(num)+1;
// console.log(roundNum)

prompt("What is your name?")
prompt("What is your crush name?")
var score =  Math.random();
var loveScore = 100 * score;
var lovePercentage = Math.floor(loveScore)+1;

if (lovePercentage>=70){
  alert("Your love score is "+lovePercentage+"%"+" You are made for each other")
}
if(lovePercentage>30 && lovePercentage<70){
  alert("Your love score is "+lovePercentage+"%")
} else{
  alert("Your love score is "+lovePercentage+"%"+" You go together like oil and water")
}
