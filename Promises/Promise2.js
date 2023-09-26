const urls = [
    'http://jsonplaceholder.typicode.com/comments',
    'http://jsonplaceholder.typicode.com/users',
    'http://jsonplaceholder.typicode.com/todos'
]


Promise.all(urls.map(url=>{
    return fetch(url).then(resp => resp.json())
})).then(result =>{
    console.log(result[0])
    console.log(result[1])
    console.log(result[2])
}).catch((err) =>{console.log('error')} )



// Here we don't need to initiate urls in promise because 
//  'fetch' is a promise itself

//  here 'resp' is return of previous function fetch
//  here 'result' is return of previous function resp.json()

console.log(2)