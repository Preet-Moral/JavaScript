// Singleton way to declare objects
//const tinderuser=new Object()
const tinderuser={
    
}
tinderuser.name="Preet"
tinderuser.id="123445@gmail.com"
tinderuser.isLoggedIn=false
console.log(tinderuser);


const user={
    email:"yahoo@gmail.com",
    fullname:{
        username:{
            firstname:"Preet",
            lastname:"Moral"
        }
    }
}
console.log(user);
console.log(user.fullname.username.firstname);

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};
//const obj3={obj1,obj2} // they come as objects 
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

//best way 
const obj4={...obj1,...obj2};
console.log(obj4)

//objects in array
const arr=[
    {
        id:1,
        email:"12@gmail.com"
    },
    {
        id:12,
        email:"112@gmail.com"
    },
    {
        id:2,
        email:"123@gmail.com"
    }
]
console.log(arr)

// access in arr of objects -> arr[0].id
console.log(tinderuser);
// o/p of the below code is in array format
console.log(Object.keys(tinderuser)); 
console.log(Object.values(tinderuser)); 
console.log(Object.entries(tinderuser)); 
 // o/p of entries [
//   [ 'name', 'Preet' ],
//   [ 'id', '123445@gmail.com' ],
//   [ 'isLoggedIn', false ]
// ]
console.log(tinderuser.hasOwnProperty('isLoggedIn'));