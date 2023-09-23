const getdata = async()=>{
    let a = await(function add() {
        console.log(2+8)
    })
    a()
}

console.log(1)
getdata()
console.log(2)

console.log(getdata)