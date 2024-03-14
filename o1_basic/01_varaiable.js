const accountId =  144553  // not  change value
let accountEmail = "ritik123@gmail.com"
var accountPassword =  "12345"/*prefer not used var 
because of issue in block scope  and  functional scope*/
accountCity = "Jaipur"
let accountState;

//accountId = 2 // mot allowed
  
accountEmail = "simple.com"
accountPassword = "5678"
accountCity = "bengaluru"

console.log(accountId);

console.table([ accountId, accountEmail, accountPassword, accountCity , accountState])