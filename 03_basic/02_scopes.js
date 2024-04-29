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

function one(){
    const  username = "ritika"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);  error bcz scope se outside  ha
    two()
}
 one()

 if(true){
    const username = "ritika"
    if(username === "ritika"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); error bcz call outside the scope
 }
//console.log(username); scope nhi ha


//================interesting ==========

console.log(addone(5))// no error bcz we can call function before declare function
function addone(num){
    return num + 1

}

//not call before the function declare
//addTwo(5) display error bcz its fuction hold in a variable 
const addTwo = function(num){
    return num +2
}

addTwo(5) 
