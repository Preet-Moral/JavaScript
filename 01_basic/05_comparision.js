// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console.log("2">1);
// console.log("02">1); // JS automatically convert string to number for comparision 
// console.log("1">2);

console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)
console.log(null < 0)
// > , < , >= , <= works different than  == , they convert null to zero 
console.log(undefined >0);
console.log(undefined ==0); // undefined gets converted to NaN when converted to a number. 
console.log(undefined <0);// Any comparison against NaN (such as NaN > 0 or NaN < 0) always yields false.

// === operator  compares datatypes as well 
console.log("2" > 2)
