// Ternary operator ---->
// condition?expr1:expr2;
let num = 20;
let res = num % 2 == 0 ? "Even" : "Odd";
console.log(res)

function isValidUser(bool) {
  return bool;
}
var account = isValidUser(true) ? "You may enter" : "Acess denied";
console.log(account);


// Switch Statements --->
function accountValidation(name) {
  switch (name) {
    case "Ankita":
      console.log("Hello " + name);
      break;

    case "Junho":
      console.log("Hello " + name);
      break;

    case "Myungsoo":
      console.log("Hello " + name);
      break;

    case "Jinyoung":
      console.log("Hello " + name);
      break;

    default:
      console.log("Sorry! No account found");
  }
}

accountValidation("Ankita");
