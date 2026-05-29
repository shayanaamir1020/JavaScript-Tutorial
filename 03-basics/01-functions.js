// console.log("S");
// console.log("H");
// console.log("A");
// console.log("Y");
// console.log("A");
// console.log("N");

function sayMyName(){
 console.log("S");
console.log("H");
console.log("A");
console.log("Y");
console.log("A");
console.log("N");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
   
}
addTwoNumbers(3,5)
const result = addTwoNumbers(3,5)
// console.log("Result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
   return `${username} just logged in`
}
// console.log(loginUserMessage("Shayan"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
  return num1
}
// console.log(calculateCartPrice(200,500,600,1000,200));
const user = {
    name:"Shayan",
    price:500,
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
  
}
// handleObject(user)
handleObject({
    name:"Khan",
    price:100,
})

const myNewArray = [200,700,500,400]
function returnSecondValue(getArray){
 return getArray[2]
}
console.log(returnSecondValue(myNewArray));
