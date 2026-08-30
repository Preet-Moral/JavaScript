//Immediately Invoked Function Expressions

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();   // we must include ';' , without it will not find end of iife.

// normally to execute we do chai() but instead we add() just after func definition 
// but it show red lines to solve this we add () in function 

//(definition)()->execution

// we use iife to immediately execute function 
// and mainly bcoz global scope causes pollution 

(() => {
    console.log(`DB connected`)
})();

// Including argument
((user) => {
    console.log(`DB connected ${user}`)
})("Preet") // argument will be passed here 

