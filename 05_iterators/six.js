const arr=["java","cpp","javascript","python"]
// const values=arr.forEach( (item) => {
    //console.log(item)
//     return item;
//     });
// console.log(values);
// for each does not return anything


// we will be using different functions like filter 

const num=[4,5,6,667];
const newny = num.filter((i) => {
    return i>4;
});
console.log(newny)

// using foreach function
const newnums=[]
num.forEach((n) => {
    newnums.push(n);
})
console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let b =books.filter((bk) => {return bk.genre==="History"})
  console.log(b);

  let ans=books.filter((bk) => {
    return bk.publish>=2000 && bk.genre=="Science";
  })
  console.log("new ans")
  console.log(ans);