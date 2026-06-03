const user = {
    username:"Shayan",
    price:1000,

    welcomeMessage:function(){
         console.log(`${this.username},Welcome to website`)
        //  console.log(this);
         
    }

    
}
// user.welcomeMessage()
// user.username = "awan"
// user.welcomeMessage()
// console.log(this);

// function juice(){
//     let username = "Shayan"
//     console.log(this.username);
//}
// juice()

 const juice= () => {
     let username = "Shayan"
     console.log(this);
    }
    // juice()

//    const addTwo = (num1,num2) => {
//      return num1 + num2
//    }
//  console.log(addTwo(5,3))

//   const addTwo = (num1,num2) =>   num1 + num2
  const addTwo = (num1,num2) =>   ({username:"Shayan"})
    
 console.log(addTwo(5,3))