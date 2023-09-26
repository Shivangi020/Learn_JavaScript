const user={
    firstName:"Junho",
    lastName:"Lee",
    country:"Korea",
    proffesion:"",
    get place(){
        console.log(this.country)
    },

    set prof(prof){
        this.proffesion=prof
    },
}

user.place

user.prof = "Singer"
console.log(user.proffesion)

