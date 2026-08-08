// Generlly 2 types of datatypes
// 1.)Primitive - pass by value 
//       7 types :- String, bool , number ,BigInt,null , symbol,undefined

const id=Symbol("123")
const newid=Symbol("123")
console.log(id===newid);
const big=1234567890543n;
console.log(typeof big)

//2.)Reference type (NOn-primitive)
// Array , object , Functions 
const arr=["ironman","hulk","thor"];

// object 
const obj1={
    name:"Preet",
    age:18,
}
const myfunc=function(){
    console.log("Hello");
}

console.log(typeof myfunc)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// There are 2 types of memory.
// 1. stack(Primitive) and 2. Heap (Non Primitive)
let ytname="preetmoral"
let newytname=ytname
newytname="DJ"
console.log(ytname);
console.log(newytname);

let obj={
    name:"preet",
    age:21
}
let obj12=obj;
obj12.name="Peter"
console.log(obj.name);
console.log(obj12.name);