// includes

// object.values and object.entries
let users = {
    user0:"junho",
    user1:"jinyoung",
    user2:"senghyun",
    user3:"taeyang",
}

Object.values(users).forEach((values)=>{
    console.log(values)
})

Object.values(users).map((values)=>{
    console.log(values + " 😍")
})

Object.entries(users).forEach((key) =>{
    console.log(key)
})

Object.entries(users).map((key) =>{
    console.log(key[1] + key[0].replace("user",""))
})