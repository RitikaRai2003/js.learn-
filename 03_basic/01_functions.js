/*function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("k");
    console.log("m");
}
sayMyName()*/

function addTwoNumbers(number1, number2){ //1st way to declare function
    console.log(number1 + number2);

}
//addTwoNumbers(3,4)

//const result = addTwoNumbers(3,4)//stored function value in varaiable
//console.log("result:" , result);


function addTwoNumbers(number1, number2){//2nd way to declare 
    //let result = number1 + number2
    //return result
    return number1 + number2

}
const result = addTwoNumbers(3,5)

//console.log("Result" ,result);


function loginUserMessage(username = "sam"){//sam is default value 
    if(username == undefined){//also written in (!username)
        console.log("please enter the username ")
        return// return ke baad kuch print nhi hoti ha
    
    }

    return `${username} just logged in`
}
//console.log(loginUserMessage("ritika"))
//console.log(loginUserMessage())//print undifned



function calculateCartPrice(...num1){//or (val1, val2, ...num1) where val1 = 222 , val2 = 394 ,...num1 = 456 , 43
    return num1

}
//console.log(calculateCartPrice(222, 394, 456, 43 ))


const user = {
    username : "ritika",
    price : 123

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username : "sam",
    price : 234

})

const myNewArray = [200, 400, 100]

function retuenSecondValue(getarray){
    return getarray[1]
}
//console.log(retuenSecondValue(myNewArray));
console.log(retuenSecondValue([100 , 200 , 300 , 400]));