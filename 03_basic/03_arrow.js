const user ={
    username : "ritika",
    price :777,
    
    welcomeMessage : function(){
        console.log(`${this.username} Welcome to website`)
        console.log(this); // tell about the current context
    }
}
//user.welcomeMessage()
//user.username ="simple"
//user.welcomeMessage()
console.log(this);// there is no global value

//function chai(){
//    let username = "ritika"
//    console.log(this);// print so many values
//    console.log(this.username);//undefined print bcz aise syntax of THIS bs object mai use kr skte hai
//}
//chai()// value print tabhi hoti jab aap function ko call krte ho tab

/*
const chai = function(){
    let username = "ritika"
    console.log(this.username);
}
chai()  */ // same as output above function...it another way to write the function as similar to above


//++++++++++++++++++ ARROW function+++++++++++++++
const chai = () => {
    let username = "ritika"
    console.log(this.username);
    //console.log(this)  same as  regular function
}
chai() 


//syntax of arrow function 
/*  () => {}     */


//1st way 

const addTwo = (num1, num2) =>{
    return num1 +num2
}
console.log(addTwo(3,4))

//2nd way 

//const addTw = (num1, num2) => num1 +num2
//const addTw = (num1, num2) => (num1 +num2)
//console.log(addTw(3,4))


//const addTw = (num1, num2) => {username : "ritika"}//nothing return
const addTw = (num1, num2) => ({username : "ritika"})
console.log(addTw(3,4))