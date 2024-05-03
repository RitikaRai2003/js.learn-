//Reduce method
const myNums = [1, 2, 3]

// normal function using reduce 
/*const myTotal = myNums.reduce( function (accumlater , currentvalue) {
    console.log( `acc :- ${accumlater} and currentvalue :- ${currentvalue}`)
return accumlater + currentvalue
}, 0)*/
//console.log(myTotal)

//using  arrow function
const myTotal = myNums.reduce( (acc , culvalu) => acc + culvalu , 0)
console.log(myTotal)

//using object and array
const shoppingCart = [
    { 
        itemName : "java course", 
        price : 666
},
{ 
    itemName : "python course", 
    price : 996
},
{ 
    itemName : "html course", 
    price : 999
},
{ 
    itemName : "datascience  course", 
    price : 1299
},

]

const priceToPay = shoppingCart.reduce( ( acc ,item) => acc + item.price ,0)
console.log(priceToPay);