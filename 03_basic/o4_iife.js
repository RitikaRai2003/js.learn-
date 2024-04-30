//Immediately invoked function expressions

/*function chai(){
    console.log("DB Connected")
}
chai()*/


(function chai(){
    // named IIFE
    console.log("DB Connected")
})();

(  () => {
    //unnamed IIFE  -: arrow function
    console.log("bd connected two")
})();// ; used for separted  when  two IIFE write  

(  (name) => {
    console.log(`bd connected two ${name}`)
})("ritika")