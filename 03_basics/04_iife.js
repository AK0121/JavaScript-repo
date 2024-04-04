//  Immediately Invoked Function Expressions (IIFE)


(function one() {
    // named IIFE
    console.log(`Db CONNECTED`);
})();

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED AGAIN ${name}`)
})("Harry");

