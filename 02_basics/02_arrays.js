const marvelHeros = ["thor","Ironman", "spiderman"]
const dcHeros = ["superman","flash", "batman"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

// let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

let allNewHeroes = [... marvelHeros,...dcHeros]  //spread function
// console.log(allNewHeroes)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = anotherArr.flat(Infinity)
// console.log(realArr);

console.log(Array.isArray("Abhi"))
console.log(Array.from("Abhi"))
console.log(Array.from({name: "Abhi"})) // !!important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))