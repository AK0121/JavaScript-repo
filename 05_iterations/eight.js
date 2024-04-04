const myNums = [1,2,3,4,5,6,7,8,9,10]

// const total = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal

// }, 0)

// const total = myNums.reduce( (acc, curVal) => {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// }, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 2999
    },
    {
        itemName: "web-dev course",
        price : 4999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice)