//Dates

let myDate = new Date()
//console.log(typeof myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toTimeString());
//console.log(myDate.toUTCString());
//console.log(myDate.getTimezoneOffset());

//let myCreatedDate = new Date(2024, 0, 23)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2024, 0, 23 , 5, 3)
//let myCreatedDate =  new Date("2024-01-14")
let myCreatedDate =  new Date("01-14-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.getDate());

//`${newDate.getDay()} and the time`


console.log(newDate.toLocaleString('default' , {
    weekday: "long", 
    
}))
