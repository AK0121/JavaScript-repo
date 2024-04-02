const user = {
    userName : "Abhishek",
    price : 999,

    welcomeMessage: function (params) {
        console.log(`${this.userName} , welcome to website`)
        console.log(`${this.price} USD`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);

// function one(params) {
//     let username = "hitesh"
//     console.log(this.username)
// }

// one()

const chai = () => {
    let username = "hitesh"
        console.log(this)
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)  // if you use perenthises there is no need of return keyword unlike curly braces.

const addTwo = (num1, num2) => ({userName: "Abhishek"})

console.log(addTwo(2,3))

const myArr = [1,2,3,4,5,6]

// myArr.forEach(() => {} )