const num=[1,2,3,4,5,7,6];
const newnum=num.map((nums) => { return nums+10});
console.log(newnum)


// sbko 3X krke , 3 add kro jo 20 se bara usko lo 
const ans=num.map( (item) => item*3).map((item) => item+3).filter((item) => item>20);
console.log(ans);