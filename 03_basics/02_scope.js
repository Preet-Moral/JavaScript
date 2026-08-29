const a = 1; 
 if(true){const a = 10;
            var b = 20;
            let c = 30;
            console.log(a);
        }
console.log(a)
// console.log(b)
// console.log(c)

// var causes problem of scope 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username="Preet"
    function two(){
        const website="Youtube"
        console.log(username)
    } 
    //console.log(website);
    two()
} 
one()



//+++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)) // It will work 
function addone(num){
    return num+1
}

console.log(sum(5)) // This will not work 
const sum =function addtwo(num){
    return num+2
}
