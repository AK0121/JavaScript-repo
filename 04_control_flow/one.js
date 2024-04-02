// if
// const isUserLoggedIn = true;
// const temprature = 41

// if (temprature < 40) {
//     console.log("less than 50")
// } else {
//     console.log("tempratue is greater than 50")
// }

// console.log("Execute")

// const score = 200

// if (score > 100) {
//     const  power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),  // implicit scope (means assumed it is a scope)
// console.log("test2"); // !!this is not a good practice


// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }



// *********** Logical operators *************

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 === 5) {  // && "and" operator means both the conditions should be true if one of them is false the code will not execute.
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // || "pipe sign" also called "or" operator is used to check either one of the conditons is true than the code will execute .
    console.log("User logged in")
}









/* basic comparision operators :-
<  lessthan , > greaterthan.
<= lessthan equalto , >= greaterthan equalto.
== double equal to , != not equal to.
=== Tripple equal to or strict equal to  (datatype check) , !== strict not equal to.

*/

// if (false) {  // this code will not execute because condition is false

// }