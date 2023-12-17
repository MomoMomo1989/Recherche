let searc = document.querySelector('#Rech');
let iconRech = document.querySelector('#iconRech');
let Actualicon = document.querySelector('#Actualicon')
let textSearc = document.querySelector('#textSearc')
iconRech.addEventListener('click',()=>{
    searc.classList.toggle('animsearch')
    textSearc.classList.toggle('estvisible')
    document.querySelector('#textSearc').focus()

});
Actualicon.addEventListener('click', ()=>{
    document.querySelector('#textSearc').value = ""
});
