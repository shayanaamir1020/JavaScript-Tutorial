const mySym=Symbol("Key1")
const JsUser = {
    name:"shayan",
    "fullname": "M.Shayan",
    [mySym]:"mykey1",
    age: 19,
    location:"Kohat",
    email:"Shayan@gmail.com",
    islogged:false,
    LastLoginDays: ["Monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);
// JsUser.email = "Shayan@awangmail.com"
// Object.freeze(JsUser)
JsUser.email = "Shayan@awangmail.com"
// console.log(JsUser.email);
JsUser.greeting = function(){
    console.log("Hi! JsUser");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hi! JsUser,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







