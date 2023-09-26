function totalObject(a,b,c) {
    console.log(a+b+c)
}
let num =[5,3,4,6]
totalObject(...num)
// a,b,c,d = ...num then a = 5 , b = 3, c = 4 and d none

const obj1  = {
    pen:15,
    chocolate:20,
    books:2,
    bottle:1
}


const {pen,chocolate,...rest} = obj1
