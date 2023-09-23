const myPromise = new Promise((resolve , reject)=>{
    if (true){
        // throw Error
        resolve('it is done')
    }else{
        reject('Error ,it is broke')
    }
})
myPromise

.then((result)=>result+'!!!!')
    // (error)=> console.log('ooooopsss'))
.then((result2)=>result2+'?????')
.catch((error)=>console.log(error))
.then((result3)=>(result3+'/////')
)


const promise1 = new Promise((resolve,reject)=>{
    setTimeout(reject,100,'HIIII')
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'hellloooo there')
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,'what you doinn???')
})

// Promise.all() --> will give error on rejected
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values)
})

// Promise.allSettled() --> will not give error on rejected
Promise.allSettled([promise1,promise2,promise3])
.then(values=>console.log(values))