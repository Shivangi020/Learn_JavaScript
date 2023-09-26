// function reverseString(s) {
//   try
//   { let arr = s.split();
//     arr.reverse();
//     let newS = arr.join('');
//     console.log(newS);
//   }catch(err){
//       console.log(err)
//   }
  
// }
//  let s = "1234"
//  let arr = s.split();
//  console.log(arr.reverse())


// class Rect{
//  constructor(a,b){
//   length:a;
//   brea :b;
//   area:this.length*this.brea
//  }
// }

// let rr = new Rect(2,3)
// console.log(rr.area)

function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area:function(){
         return this.length* this.width}
    }
}

Rectangle(5,8)
Rectangle.area()