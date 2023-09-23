// Optional Chaining Operator ( ? . ) (it is use instead of &&)

let my_pokemon = {
    pokemon1: {
        name:"pikachu",
        weight:5,
        height:0.6,
        power:false,
    },
}

let your_pokemon = {
    pokemon2: {
        name:"water mouse",
        weight:8,
        height:1,
        power:"",
    },
}


if(my_pokemon.pokemon1 && my_pokemon.pokemon1.weight){
    let weight_pokemon1 = my_pokemon.pokemon1.weight
    console.log(weight_pokemon1)
}else{
    console.log("error")
}

//  if there is your_pokemon then if it has a property name pokemon2 and 
//  if yes does it have property name weight then console.log weight_pokemon2

let weight_pokemon2 = your_pokemon?.pokemon2?.weight ;
console.log(weight_pokemon2)



//  Nullish Coalesing operator ( ?? ) (it is use instead of  || )

let power_checker1 = my_pokemon?.pokemon1?.power?? "no power";

//  Here it checks like true and False and empty String is false so it prints "No power"
let power_checker2 = your_pokemon?. pokemon2?.power||"no power";

console.log(power_checker1)
console.log(power_checker2)