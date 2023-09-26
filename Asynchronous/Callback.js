function loading(topic){
        console.log(`loading ${topic}`)
}

function sendNow(ans,loadFunc) {
    if(ans==='yes'){
        console.log('tweet has been send')
    }else{
        console.log('tweet saved in draft')
    }
    
    let searchTopic = prompt('What do you want to search next?')
    loadFunc(searchTopic)

}


function twitter(tweet,send){
    console.log(tweet)
    let button = prompt('wants to tweet(yes/no)')
    send(button,loading)
}



twitter('shxasjxbjsahbx',sendNow)