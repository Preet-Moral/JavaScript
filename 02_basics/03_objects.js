// objects are declared in two ways 
//1.)Singleton -> in this object will be one of its kind 
//created by Object.create

//2.)Objects Literals
const mysym=Symbol("key1")
const Jsuser={
    name:"Preet",
    "full name":"Preet moral",
    [mysym]:"mykey", //[symbol_name] symbol are declared like that
    age:21,
    location:"jalandhar",
    email:"preetmoral567@gmial.com",
    isLoggedin:false,
    lastlogindays:["Monday,Tuesday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"]);// -> this is helpfull when in objects
// we declare like {
//     "email": preetmoral567@gmail.com
// } 
console.log(Jsuser["full name"]); 
// when property has special character like spaces , etc 
// then it can only be access by [property]
console.log(typeof Jsuser[mysym])

Jsuser.email="preetm.ic.24@nitj.ac.in";
console.log(Jsuser);
// Object.freeze(Jsuser); used when we dont want to change our data 
Jsuser.email="123@gmail.com";
console.log(Jsuser);

// Adding function
Jsuser.greeting=function(){
    console.log("Hello JS user");
}
Jsuser.greeting2=function(){
    console.log(`Hello ${this.name} , you are welcomed`);
}
Jsuser.greeting();
Jsuser.greeting2();