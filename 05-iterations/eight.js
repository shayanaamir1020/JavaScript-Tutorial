//  const myNums = [1,2,3,4,5];
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc is : ${acc} and currval is : ${currval}`);
    
//     return acc + currval;
// },0)

// const myTotal = myNums.reduce( (acc,currval) => acc + currval,0)
// console.log(myTotal);

const shoppingCart = [{
    itemName:"js course",
    itemPrice:4999
},
{
    itemName:"python course",
    itemPrice:2999
},

{
    itemName:"data science course",
    itemPrice:9999
},
]
const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.itemPrice, 0);

console.log(PriceToPay);

