const userEmail = []

if(userEmail){
    console.log("got user email")
}else {
    console.log("dont have user email")
}


/*falsy values :-
false ,0,-0,BigInt , 0n , null , "", undefined , NaN */

/*ruthy values :-
"0" , 'false' , " " , [] , {} , function(){}*/

//check array 
if(userEmail.length ===0){
    console.log("array is empty")
}

