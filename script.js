let btn = document.querySelector('.present')
let firstBlock = document.querySelector('.first')
let secondBlock = document.querySelector('.second')
btn.addEventListener('click', ()=> {
    firstBlock.classList.toggle('visible')
    secondBlock.classList.toggle('visible')
})