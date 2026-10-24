for(let i=0 ;i<=10;i++){
    if(i==5){
        console.log("5 is thes best number ")
    }
    console.log(i);
}


for(let i=1 ; i<=10 ; i++){
    for(let j=1 ; j<=10;j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}

myarr=["spiderman","ironman","ben10"];
for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i]);
}


// for (let i = 0; i < 11; i++) {
//     if(i==5){
//         continue;
//     }
//     console.log(i);
    
// }
for (let i = 0; i < 11; i++) {
    if(i==5){
        break;
    }
    console.log(i);
    
}