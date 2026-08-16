// Date is an object in JS
let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toISOString())

let mycreateddate= new Date (2023,0,23,5,3,23) // in this format 00 -> 
let mycrdate= new Date ("2023-01-25") // in this format 01 -> jan YY - MM - DD 
console.log(mycrdate.toLocaleString());

let timestamp= Date.now() // how many milliseconds have from 
//1 jan 1970 upto the exact time 
console.log(timestamp)
console.log(mycrdate.getTime()) // same as Date.now
// but gives o/p for stored date 

// in seconds 
console.log(Math.floor(Date.now()/1000));


// playing 
let d=new Date()
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth()+1); // 0 -> jan 

console.log((d.toLocaleString('default',{weekday:"long"})));
console.log(d.getHours())