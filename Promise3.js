let promise1 = new Promise((resolve,reject) =>{
     let age= 19;
     if(age>18){
        resolve('Ok! you have valid age to enter')
    }else{
        reject('Sorry try after some years')
     }
})

promise1.then(logIn=>{
    console.log('Ok you have logIn')
}).then(video=>{
    console.log('video 10 is playing')
}).then(logOut=>{
    console.log('you have logged out')
}).catch(err=>{
    console.log(err)
})