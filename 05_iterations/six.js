const coding = ["js", "python" , "ruby" , "cpp"]

 /*const values = coding.forEach( (item) => {
    //console.log(item); output   js python ruby 
    return item
})

console.log(values)// undefined
*/

const myNums = [1 , 2, 3, 4, 5, 6, 7, 8, 9]

 //const newNums = myNums.filter( (num) => num > 4)
 //const newNums = myNums.filter( (num)  => {
  //  return num >4
 //})
 //console.log(newNums);


 const newNums  = []
 myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
 })
 console.log(newNums)


 //practice questions 

 const books = [
    { titile : 'book one', genre:'fiction' , publish:1981, 
        edition : 2024},
    { titile : 'book two', genre:' non fiction' , publish:2009, 
        edition : 2005},
    { titile : 'book three', genre:'history' , publish:2006, 
        edition : 2008 },
    { titile : 'book four', genre:'science' , publish:1989, 
        edition : 2003},
    { titile : 'book five', genre:'non fiction' , publish:1994, 
        edition : 2000},
    { titile : 'book six', genre:'history' , publish:1990, 
     edition : 2001}
 ];


 let userBooks = books.filter( (bk) => bk.genre == "history")
 console.log(userBooks);// 

  userBooks = books.filter( (bk) =>  bk.publish >= 2000)
 console.log(userBooks);

 userBooks = books.filter( (bk) => {
   return bk.publish >= 2000 && bk.genre == "history"
})
 console.log(userBooks);
 