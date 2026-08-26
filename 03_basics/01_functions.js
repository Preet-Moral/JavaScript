function saymyname(){
    console.log("Preet Moral")
}
function addtwonumber(num1 , num2){
    return (num1+num2)
}
const result = addtwonumber()
console.log(result);


function userlogin(username="sam"){
    if(!username){
        console.log("Please enter a valid username");
        return ;
    }
    return (`${username} just logged in `)
}
console.log((userlogin()));



//++++++++++++++++++++++++++++++part 2 ++++++++++++++++++++++++++++++++++++++++
function calculatecartprice(val1,val2,...num){
    return num
} 
console.log(calculatecartprice(24,46,34,23))


const user={
    name:"Preet",
    id:123
}
function handleobject(anyobject){
    console.log(`your name is ${anyobject.name} and your id is ${anyobject.id}`)
}
handleobject(user)
handleobject({
    name:"vishal",
    id:1234
})


const arr=[100,222,435,234];
function part(givearray){
    return givearray[2];
}
console.log(part(arr));