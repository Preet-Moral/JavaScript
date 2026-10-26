const num=[1,2,3]
const add=num.reduce((acc,curr) =>{return acc+curr},0);
// we specified accumulator val in the end
console.log(add);

const shoppingcart=[
    {
        course:"JS",
        price:999
    },
    {
        course:"PY",
        price:1999
    },
    {
        course:"AI",
        price:19999
    }
]
const bill=shoppingcart.reduce((acc,val) => {return acc+val.price},0);
console.log(bill);