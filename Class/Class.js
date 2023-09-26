// Main Class
class User {
    constructor(name,age,post){
        this.name = name;
        this.age =age;
        this.post = post;
    }
 signIn(){
     return "Hey"+ this.name+" Welcome back! This is your recent post" + this.post 
 }   
}

// Child Class
class Editor extends User {
    constructor(name,age,post,level){
    super(name,age,post);
    this.level=level;
    }
    editing(){
        let text = prompt("What is wrong with user post?")
        alert(text)
    }
}

let editor1 = new Editor("rachel",26,"Editor","Senior");
console.log(editor1)
editor1.editing()
editor1.signIn()
