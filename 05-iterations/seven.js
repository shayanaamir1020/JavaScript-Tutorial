 const myNumbs = [1, 2, 3, 4, 5, 6, 7];
// const newNumbs = mynumbs.map((num) => num + 10);
// console.log(newNumbs);

// const mynumbs = ["1", "2", "3", "4", "5", "6", "7"];
// const newNumbs = [];
// mynumbs.forEach((num) => {
//     newNumbs.push(Number(num) + 10);
// });
// console.log(newNumbs);

const newNums = myNumbs
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num > 40 )
            console.log(newNums);