//var c = 300
let a = 400//global scope

if(true){//block scope
    let a = 10 
    const b = 20
    console.log("inner:" , a);//10
}

console.log(a);//400
//console.log(b);
//console.log(c);