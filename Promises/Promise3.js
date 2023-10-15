let promise1 = new Promise((resolve,reject) =>{
     let age= 21;
     if(age>18){
        resolve('Ok! you have valid age to access this video')
    }else{
        reject('Sorry try after some years')
     }
})

console.log(promise1);
promise1.then(logIn=>{
    console.log(logIn)
    console.log('Ok you have logIn')
}).then(video=>{
    console.log(promise1,video)
    console.log('video 10 is playing')
}).then(logOut=>{
    console.log(promise1,logOut)
    console.log('you have logged out')
}).catch(err=>{
    console.log(err)
})