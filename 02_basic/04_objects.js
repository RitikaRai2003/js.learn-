//singleton/contractor

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//declare object
const regularUser = {
    email : "ritika@",
    fullname : {
        userfullname : {
            firstname : "ritika",
            lastname : "rai"
        }

    }
}

//access object
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.lastname);

//additing object one and more
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c" , 4:"d"}
const obj4 = {5:"c" , 6 :"d"}

//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({}, obj1, obj2, obj4)

//spread method..................
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);
console.log(obj3 == {});//false


const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));