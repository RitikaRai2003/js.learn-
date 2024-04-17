const name = "Ritika "
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`my self ${name}  and my repo count ${repoCount}`);

const gameName = new String('ritika-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// find the  character
console.log(gameName.indexOf('t'));//position of character

const newString  = gameName.substring(0,4)
console.log(newString);

const anotherString  = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   ritika   "
console.log(newStringOne);
console.log(newStringOne.trim());//remove starting and end space


const url = "https://ritika.com/ritika%20rai"

console.log(url.replace('%20' , '-'));

console.log(url.includes('ritika'))//true

console.log(gameName.split('-'))
