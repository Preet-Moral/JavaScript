const marvel_heroes=["thor", "ironman","hulk"]
const dc_heroes=["batman","superman","robin"]
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][0])
// the other array is pushed as a array ->
// [ 'thor', 'ironman', 'hulk', [ 'batman', 'superman', 'robin' ] ]

marvel_heroes.pop();
const neww=marvel_heroes.concat(dc_heroes); // add two arrays and return 
console.log(neww)

// best way to add two or more arrays 
// remember by droping a glass or by prashanth way of writing 
const all=[...marvel_heroes,...dc_heroes];
console.log(all);


const ar=[1,2,3,4,5,[1,2,3],34,[123,[3423,[3]]]];
const arrr=ar.flat(Infinity); //-> use when there ar arrays in an arrys , flat(1 ,2 , 3 ... or infinity) flat one level , 2 or all->Infinity
console.log(arrr);

console.log(Array.isArray("Preet"));//->false
console.log(Array.from("preet"));//->[ 'p', 'r', 'e', 'e', 't' ]
console.log(Array.from({name:"Preet"}));
// o/p is [] bcoz
//Array.from() expects an iterable object (like a String, Map, //or Set) 

let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3));
// output
//->[100, 200, 300]