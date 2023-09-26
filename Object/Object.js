const user ={
//     variable name: variables value
    name:"Shivangi Singh",
    birthday:[15,5,2000],
    employed:false,
    gender:"female",
    // this is not working because it is not class , it is object
    //----> idNo: this.birthday[0] + this.name.length,
    greet:function(){
      console.log(`hii ${this.name}`) 
    },
    age:function(){
      let age_no = 2021-this.birthday[2]
      return age_no
    },
   
};

user.greet()
user.age()
