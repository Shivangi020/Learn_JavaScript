const first = () =>{
    const greet ="hello"
    
    const second = () =>{
        alert(greet)
    }
    return second()
}

const newFunction = first()

newFunction

first()
