// singleton
// Object.create()

// object literals

const mySym = Symbol("key1");

let user = {
    name: "Abhishek",

    isLoggedIn: false,

    lastLoggedIn: ["Monday", "Sunday"],

    age: 18,

    [mySym]: "myKey1",
}
// console.log(user);
// console.log(user["name"]);
// console.log(user[mySym]);
// console.log(typeof [mySym]);

// user.isLoggedIn = true;
// Object.freeze(user);
// user.name = "Lala"
// console.log(user); 

user.greeting = function(){
    console.log("Hello user")
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}

console.log(user.greeting());
console.log(user.greetingTwo());