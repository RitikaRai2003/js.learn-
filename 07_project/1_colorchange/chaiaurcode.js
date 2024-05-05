const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e)//print all button
        console.log(e.target)//print the button which one we click
        if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id//= grey
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
           }
           if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
           }
           if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
           }
           /*if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
           }*/
    })
});
