const container = document.querySelector('.container');
const button = document.querySelector('.button');
const value_display = document.querySelector('.value-display')
const slider = document.querySelector('.slider');
const body = document.querySelector('body');

const BOARD_WIDTH_HEIGHT = 600;

value_display.innerHTML = slider.value;

slider.oninput = function(){
    value_display.innerHTML = this.value;
    removeChildren(container);
    makeBoard(this.value)
}

body.onload = function(){
    makeBoard(16);
}

function makeBoard(num_of_squares){
    let pixle_size = Math.round((BOARD_WIDTH_HEIGHT/num_of_squares)*10)/10;
    for(let i = 0; i<num_of_squares*num_of_squares;i++){
        const pixle = document.createElement('div');
        pixle.className = 'pixle'
        pixle.setAttribute('style',`width:${pixle_size}px; height: ${pixle_size}px`)
        container.appendChild(pixle);
    }

    let squares = document.querySelectorAll('.pixle');
    squares.forEach(square =>{
        square.addEventListener('mouseover',() =>{
            square.classList.toggle('visited');
        })
    })
}

function removeChildren(parent){
    while(parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

button.addEventListener('click',() =>{
    let squares = document.querySelectorAll('.pixle');
    squares.forEach(square =>{
            square.classList.remove('visited');
    })
})



