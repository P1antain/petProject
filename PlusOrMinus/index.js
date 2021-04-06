const value = document.querySelector(".box__number");
const buttons = document.querySelectorAll(".btn");
let count = 0;
// Перебираем переменную Форычем, в функции определяем элемент перебора
//На элемент перебора вешаем слушатель
//Определяем переменную, которая отвечает за то, куда мы нажимаем, добавляем ей возможность выбора класса
//Через иф задаем переменной конерктную область перебора
//В зависимости от области перебора к коунт добавляем или уменьшаем
// Нашему числу присваиваем значение коунт

buttons.forEach(function (btn){
    btn.addEventListener('click', (event )=>{
        let click = event.currentTarget.classList;
        if(click.contains('button__increment')){
            count++
        }else if(click.contains('button__decrement')){
            count--
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green'
        } else if (count < 0){
            value.style.color = 'red'
        } else{
            value.style.color = 'black'
        }

        value.textContent = count;
    })
})