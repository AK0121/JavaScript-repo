// for of

// ["","",""]
// [{}, {}, {}]

const myArr = [1,2,3,4,5];

for (const num of myArr) {
    // console.log(num);
}

const str = "Hello world!"

for (const i of str) {
    // console.log(`Each char is ${i}`)
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("FR", "France")
map.set("IR", "Iran")

// console.log(map);

for (const [key, values] of map) {
    // console.log(key,":", values)
}

// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman"
// }

// for (const [key, values] of myObject) {
//     console.log(key,":", values)
// }

