const arr=[1,2,3,4,5,"Preet",true]
// JS arrays are resizable and as you see above contain different datatypes

console.log(arr[5]);
// JS arrays copy operations are follows shallow copy 

const newarr= new Array(1,2,3,45);
console.log(newarr[3]);

// Arrays methods 
arr.push(10.23); // push element in the array
console.log(arr); 
arr.pop();
console.log(arr);

arr.unshift(8) // add element at start 
console.log(arr);
arr.shift() // remove element at start
console.log(arr);

console.log(arr.includes("Preet")); // find a element 
// return true or false
console.log(arr.indexOf(3));// tell index or -1 if not found


const arrs=arr.join() // convert the array into a single 
// string separated by comma  
console.log(arrs)
console.log(arr)

// d/f b/w slice and splice very imp
// 1.)splice include all elements in the range 
// 2.)Also splice changes the original arrays 
// the element in given splice will be removed form the original array  
const nums=[1,2,3,4,54]
console.log(nums)
const a=nums.slice(1,3); // slice(start_idx,end_idx)
console.log(a)
console.log(nums)

const b=nums.splice(1,3); // spilce(start_idx,no.of removal)
console.log(b)
console.log(nums)