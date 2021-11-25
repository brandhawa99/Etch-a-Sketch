const container = document.querySelector('.container');
const button = document.querySelector('.button');
const SIZE = 600;
let num = 30;

for(let i = 0 ; i<num*num; i++){
    let pixle = document.createElement('div');
    pixle.setAttribute('class','pixle')
    container.appendChild(pixle); 
}


const squares = document.querySelectorAll('.pixle');
squares.forEach(square =>{
    square.addEventListener('mouseover',() =>{
        square.classList.toggle('visited');
    })
})

button.addEventListener('click',() =>{
    squares.forEach(square =>{
        square.classList.remove('visited');
    })
})