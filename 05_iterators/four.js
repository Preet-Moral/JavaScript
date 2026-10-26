const obj={
    "js":"javascript",
    "py":"python",
    "c++":"cpp",
} 

for (const item in obj) {
        console.log(item ,obj[item]);
}

const arr= ["java","cpp","python"];
for (const item in arr) {
    console.log(arr[item]);
}

const mp=new Map();
mp.set("pb","punjab")
mp.set("rj","rajasthan")
mp.set("as","assam")
// for (const item in mp) {
//     console.log(item);
// }
// for in doesnt work for map 