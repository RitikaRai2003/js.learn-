//for of
 
["" , "" , ""]
[{} ,{} ,{}]

const arr =[1, 2,3 ,4,5 ]

for (const num of arr) {
    //console.log(num);
}

const greeting = "hello world"
for (const greet  of greeting) {
    //console.log(`Each char is ${greet}`)

}

//maps

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of America")
map.set('Fr', "France")
map.set('IN', "india")


//console.log(map);


/*for (const [key , value] of map) {
    console.log(key , ";-" ,value );
    
}*/


// for of loop not work for object iteration
/*const myObject = {
    "game1" : 'NFS',
    "game2" : 'spiderman'
}
for (const [key , value] of myObject) {
    console.log(key ,":-" , value)
    
} error occure */