// Primitive( call by value) it  give  reference  not orgini on and the change  we done in the copy one not orginal 
/* 7 types :- String
              Number
              Boolearn
              null(empty not 0)
              undefined(variable ,space  declare in memory but not dclare value)
              Symbol(it use to make value unique)
              BigInt(scientfic and big value))*/
//number
const score = 100
const scoreValue = 100.3

const isLoggedIn = false // boolean
const outsideTemp =null
let userEmail ; //undefined

const id = Symbol('123')//symbol
const anotherId = Symbol('123')//symbol ,both variable having same value but they are not equal

console.log(id === anotherId);

//const bigNumber = 3456789456876457899n //BigInt :- put n in last



//Reference(Non primitive)    :- it reference directly to memory  allocated
//Array, Object, functions   

const heros = ["shaktiman", "naagraj" , "doga"] // array

let myObj = {
    name: "Ritika",
    age: 22 ,
}// in carle braces all is object

//declare function in variable way
const myFunction = function(){
    console.log("hello world");
}//function

console.log(typeof bigNumber );//result undefined = undefined
console.log(typeof outsideTemp );//result null= onject
console.log(typeof soreValue );// result number = number , boolean = boolean , string = string , object = function, object

console.log(typeof myFunction);//result function = object function ,  all non primitive is givre in typeof = function

