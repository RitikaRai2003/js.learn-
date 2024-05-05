const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit' ,function(e){
 e.preventDefault();
 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

 if( height === ''|| height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  //results.innerHTML = `${height}`
 else if( weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
 } else{
     const bmi =(weight / ((height*height)/10000)).toFixed(2)
     //show the result
     const inst = results.innerHTML =`<span>${bmi}</span>`}
     if(inst < 18.6){
       results.innerHTML ="under Weight"
     }else if(inst > 18.6 || inst < 24.9){
       results.innerHTML ="Normal Range"
     } else{
        results.innerHTML ="Over Weight"
     }
     

 
});