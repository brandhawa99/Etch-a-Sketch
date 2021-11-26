const container = document.querySelector('.container');
const button = document.querySelector('.button');
const value_display = document.querySelector('.value-display')
const slider = document.querySelector('.slider');

const SIZE = 600;
let num = 30;

value_display.innerHTML = slider.value;

slider.oninput = function(){
    let num = this.value;
    value_display.innerHTML = this.value;
}

function makeSquares(){
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

}




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