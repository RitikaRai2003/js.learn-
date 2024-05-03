const myNumbers = [1, 2, 3, 4, 5, 6, 7,8, 9, 10]

//const newNumes =myNumbers.map( (num) =>  num + 10)
//console.log(newNumes);

myNumbers.forEach( (item) => console.log(item  + 10))


// chainning :- means map, filter are use  simultaneously

const newNums = myNumbers
      .map( (num) => num * 10)// 10 ,20, 30, ....
      .map( (num) => num + 1)//11, 21, 31,  .....
      .filter( (num) => num >= 40)//41, 51, 61....
console.log(newNums);      

