const urls =[
    'http://jsonplaceholder.typicode.com/comments',
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/todos'
]


// METHOD 1 ---->

// const getdata = async()=>{
//    await Promise.all(urls.map((url)=>{
//         return fetch(url).then(resp =>  resp.json())
//     })).then(result=>{
//     console.log(result[0])
//     console.log(result[1])
//     console.log(result[2])
//     })

// }

// METHOD 2----->

const getdata = async()=>{
try{const result=  await Promise.all(urls.map((url)=>{
        return fetch(url).then(resp =>  resp.json())
    }))
    console.log(result[0])
    console.log(result[1])
    console.log(result[2])
} catch(err){
    console.log(err)
}  

}

getdata()
console.log(1)