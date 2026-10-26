const coding=["java","python","javascript"]
coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item)=>{
    console.log(item);
})


function printme(item){
    console.log(item)
}
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myobj=[
    {
        "name":"Preet",
        "code":"PM"
    },
    {
        "name":"Mamta",
        "code":"MM"
    },
    {
        "name":"Amit",
        "code":"AM"
    },
    
]

myobj.forEach((item)=>{
    console.log(item.code);
})