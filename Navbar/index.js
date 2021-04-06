let btn = document.querySelector('.button')
let lists = document.querySelector('.lists')

btn.addEventListener('click',()=>{
    btn.classList.toggle('button__active')
    lists.classList.toggle('lists-active')

})

