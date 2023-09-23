const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url=>{return fetch(url).then (resp=>resp.json())})).then(data=>console.log(data))

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('success')},4000)
});

promise.then((result)=>console.log(result))
  .catch(err=>console.log(err))
  .finally(()=>console.log('ok done'))