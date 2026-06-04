// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    //  console.log(num);
     
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`value of each char is ${greet}`);
    
}

// Maps
const map = new Map()
map.set('PAK',"Pakistan")
map.set('FR',"France")
map.set('USA',"United states of America")
map.set('PAK',"Pakistan")
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

const myObject = {
    'game1':"NFS",
    'game2':"spiderman"
}
for (const [key,value] of myObject) {
    // console.log(key,value);
    
}