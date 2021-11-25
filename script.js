const container = document.querySelector('.container');

for(let i = 0 ; i<16*16-1; i++){
    let pixle = document.createElement('div');
    pixle.setAttribute('class','pixle')
    container.appendChild(pixle); 
}
