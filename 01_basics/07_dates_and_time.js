// let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myDate2 = new Date(2023, 0, 23);
// let myDate2 = new Date(2023, 0, 23, 4, 5, 45);
// let myDate2 = new Date("2006-01-29");
let myDate2 = new Date("01-29-2006");
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString("default",{
    weekday: "long",
    
})