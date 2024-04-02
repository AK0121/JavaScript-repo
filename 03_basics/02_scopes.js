// // var c = 300;
// let a = 300

// if (true) {
//     let a = 1
//     const b = 2
//     console.log(a)
// }


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Abhishek"

    function two() {
        const website = "youTube"
        console.log(userName)
    }
    // console.log(website)
    two()
}

// one()

// if (true) {
//     const userName = "Abhishek"
//     if (userName === "Abhishek") {
//         const website = " youtube"
//         console.log(userName + website);
//     }
//     // console.log(website);
// }

// // console.log(userName);

// +++++++++++++++++ interesting ++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num + 1
    
}

addTwo(5);
const addTwo = function(num) {
    return num + 2
}

