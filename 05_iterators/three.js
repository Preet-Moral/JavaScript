// for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const nums of arr) {
    console.log(nums);
}

const greetings="Hello world"
for(const greet of greetings){
    console.log(greet);
}

const mp = new Map();
mp.set("IN","india");
mp.set("BH","bhutan");
mp.set("NP","nepal");
// console.log(mp);

for (const [item,val] of mp) {
    console.log(item,val);
}


// "FOR OF DOESNT WORK" for objects
const objects = {
    game1:"subway surfers",
    game2:"Angry Birds"
}
// for (const item of objects) {
//     console.log(item);
// }
// objects are not iterable