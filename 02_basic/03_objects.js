//Singleton(declare )
//object.create(methods of singleton or constructer)

//object literals(declare)

const mySym = Symbol("key1")


const JsUser = {
    name: "ritika",
    "full name" : "ritika rai",
    mySym : "mykey1",// normal string
    [mySym] : "mykey1",///add symbole in the object 
    age: 18,
    location: "Jaipur",
    email : "ritika@",
    isLoggedIn: false,
    lastLoginDays : ["monday" , "tuesday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym);//string
//console.log(JsUser[mySym]);//correct syntax


//value change in object 

JsUser.email = "ritikarai@gmail.com"
//console.log(JsUser)

//locked value in object that means not change the value
//Object.freeze(JsUser)

JsUser.email = "simple@gmail.com"
//console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello world")

}

JsUser.greetingTwo = function(){
    console.log(`hello JSuser ,${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



