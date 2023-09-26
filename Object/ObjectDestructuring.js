const user1 = {
    name: "Junho",
    experience:12,
    ongoing:true,
    expertise: ["Acting","Singing"]
}

// const name = user1.name
// const experience = user1.experience
// let ongoing = user1.ongoing
// let expertise =user1.expertise

const {name,experience} = user1
let{ongoing,expertise} = user1
console.log(name,experience,ongoing,expertise)