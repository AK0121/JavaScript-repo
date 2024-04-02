// function sayMYName(){
//     console.log("H")
//     console.log("a")
//     console.log("g")
//     console.log("u")
// }

// // sayMYName();

// // function add(num1, num2) //Parameters
// // {
// //    console.log( num1 + num2);
// // }

// function add(num1, num2) //Parameters
// {
// //    let result = num1 + num2;
// //    return result 
//       return num1 + num2  
// }

// const result = add(40, 60) //Arguments

// // console.log("result :" ,result);


// function loginUserMsg(userName = "User") {
//     // if(userName === undefined){
//     if(!userName){
//         console.log("Please enter a username");
//         return
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMsg("Abhishek121"));
// console.log(loginUserMsg());


function calculateCartPrice(val1, val2, ...num1) //Rest operator
{
    return num1
}

// console.log(calculateCartPrice(2, 5, 8, 4, 6, 9, 10));

const user = {
    userName: "Abhishek",
    price: 100

}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    userName: "Abhi",
    price: 299,
})

const myNewArray = [200, 300, 400, 500, 600];

function returnSecondValue(getArr) {
    return getArr[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400]))