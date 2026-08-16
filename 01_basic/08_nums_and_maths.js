const num=100
console.log(num)
const balance=new Number(100.109)
console.log(balance)

console.log(balance.toLocaleString().length);
console.log(balance.toFixed(1));
// decimal ke baad kitne takh value chaiye

const somenum=123.125
console.log(somenum.toPrecision(2));
// overall kitni digits chaiye

const temp=198249124
console.log(temp.toLocaleString('en-IN'));

//++++++++++++++++++++Maths++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));

// Things are going to be Random now 
console.log(Math.random()); // give random value from 0 to 1 only
console.log(Math.floor(Math.random()*10+1)); 
console.log(Math.floor(Math.random()*10+1)); 

const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1))+min));// to get in ranges  