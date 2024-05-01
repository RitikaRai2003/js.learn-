//if 
const isUserloggedIn = true
const temperature = 41

if(temperature == 40){
    console.log("excuted")

}else{
console.log("temperature is greature than 50")
}
console.log("executed");

/* comparsion operator  
 < ,> , <= ,>= , == ,!= , === (equal and tpye check)*/

 /*
 const score = 200
 if(score >100){
    const power = "fly"
    console.log(`user power ${power}`)
 }
 console.log(`user power ${power}`) */

 const balance = 1000

 //if(balance > 500) console.log("test");//implicit scope which means  code should be return in single line ans end with ;

 if(balance > 500) console.log("test"),
  console.log("test2");// multiple line should be return  but separate with , and end with ;

  //nesting 
  
  /*if(balance < 500){
    console.log("less than 500");
  }else if(balance < 750){
    console.log("less than 750")

    }else if(balance < 900){
        console.log("less than 750")
    }else {
        console.log("less than 1200")
    }*/

  const userLoggedIn = true
  const debitCard = true
  const loggedInGoogle = false
  const loggedInEmail = true

  if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
  }

  if(loggedInGoogle || loggedInEmail){
    console.log("allow to login in course");
  }
