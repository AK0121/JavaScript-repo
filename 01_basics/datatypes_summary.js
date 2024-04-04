 /*
There are two major categories of dataTypes in javaScript :


Primitive :-
number = 2,3,34,23.5,123,3435.
string = "string_value"
bigint 
boolean = true/false.
null = Stand alone value.
undefined = 
symbol = unique.


// javascript is a dynamically typed language (that means datatype is assigned automatically at the time of code execution and we can change it later throughout whole program) :-

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34463543458748429n

*/

// Non-Primitive or Reference :-
// Objects
// Arrays
// Functions


// const heros = ["shaktiman","naagraaj","doga"];

// let myObj = {
//     name:"Abhi",
//     age: 22,
// }

// const myFunction = function() {
//     console.log("Hello world");
// }
// const temp = null
// console.log(typeof temp);


// ***********************************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubeName = "Ak121"

let AnotherName = "Ak121"
AnotherName = "Abhishek121";

console.log(myYoutubeName);
console.log(AnotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@bl"
}

let user2 = user1;

user2.email = "AK@google.com";

console.log(user1.email)
console.log(user2.email)
