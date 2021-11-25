const container = document.querySelector('.container');

for(let i = 0 ; i<16*16-1; i++){
    let pixle = document.createElement('div');
    pixle.setAttribute('class','pixle')
    container.appendChild(pixle); 
}

// const squares = document.querySelectorAll('.pixle');
// squares.forEach(square =>{
//     square.addEventListener('mouseover',myFunc(e))
// })

const square = document.querySelector('.pixle');
square.addEventListener('mouseover',()=>{
    square.classList.toggle('visited');
})

const squares = document.querySelectorAll('.pixle');
squares.forEach(square =>{
    square.addEventListener('mouseover',() =>{
        square.classList.toggle('visited');
    })
})