// const coding = ["java","python","c++","ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNumbs = myNums.filter( (num) => num>4 )

// const newNumbs = []
// myNums.forEach( (num) => {
//   if(num>4){
//     newNumbs.push(num)
//   }
// })
// console.log(newNumbs);

 const books = [
    {
     title:'book-one', genre:'fiction', publish:'1981', edition:'2004'
    },

    {
     title:'book-two', genre:'non-fiction', publish:'1990', edition:'2000'
    },

    {
     title:'book-three', genre:'history', publish:'1992', edition:'2003'
    },

    {
     title:'book-four', genre:'science', publish:'2001', edition:'2005'
    },

    {
     title:'book-five', genre:'history', publish:'1970', edition:'1980'
    },
    {
     title:'book-six', genre:'non-fiction', publish:'1977', edition:'1980'
    }

 ]
 let userBooks = books.filter( (bk) => bk.genre ==='history' )
 userBooks = books.filter( (bk) => bk.publish >=1970 && bk.genre ==='history' )
 console.log(userBooks);
