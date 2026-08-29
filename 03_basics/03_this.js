const user={
    username:"Preet",
    price:999,
    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username="dj"
user.welcomemessage()

console.log(this) 
// but in web  ***console.log(this)  it will not return {} 



function chai (){
    let username="hitesh"
    console.log(this);
}
chai()


function chai1 (){
    let username="hitesh"
    console.log(this.username)//  ->  this will give undefined , conclusion this work with objects 
}
chai1()
const code = function chai1 (){
    let username="hitesh"
    console.log(this.username)//  ->  this will give undefined , conclusion this work with objects 
}
// chai1()


// ++++++++++++++++++++++++++ (->) Arrow function +++++++++++++++++++++++++

const chaipati= () =>{
    let username="Preet"
    console.log(this.username)
}

 chaipati() // still undefined

const chaipai= () =>{
    let username="Preet"
    console.log(this)
}

 chaipai() // {}

const addtwo=(num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,7))

// we can declare arrow function explicitly 
const addt=(num1,num2) => (num1+num2) // no need to have return statement

console.log(addt(1,2))
const addte=(num1,num2) => ({username:"Preet"}) // to return a object we need it to be in ()

console.log(addte(1,2))
