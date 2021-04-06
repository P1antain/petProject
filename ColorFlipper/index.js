let background = document.querySelector('.color');
let color = document.querySelector('.color__pick')
let btnColor = document.querySelector('.color__button')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btnColor.addEventListener('click', () =>{
    let tegHex = '#';
    for(let i=0; i < 6; i++){
        tegHex += hex[getRandom()]
    }
    background.style.backgroundColor = tegHex;
    color.textContent = tegHex;
    color.style.color = tegHex;
})

function getRandom(){
    return Math.floor(Math.random() * hex.length)
}