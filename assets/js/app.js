const selector = document.querySelectorAll('.selector');
const screen = document.querySelector('.screen-value');

const btnOperations = [];
const btnNumbers = [];
// Alterei as variáveis para arrays pois seria melhor de manusear devido a quantidade de botoes 
btnNumbers.push(document.getElementById('0').textContent);
btnNumbers.push(document.getElementById('1').textContent);
btnNumbers.push(document.getElementById('2').textContent);
btnNumbers.push(document.getElementById('3').textContent);
btnNumbers.push(document.getElementById('4').textContent);
btnNumbers.push(document.getElementById('5').textContent);
btnNumbers.push(document.getElementById('6').textContent);
btnNumbers.push(document.getElementById('7').textContent);
btnNumbers.push(document.getElementById('8').textContent);
btnNumbers.push(document.getElementById('9').textContent);

btnOperations.push(document.getElementById('point').textContent);
btnOperations.push(document.getElementById('sum').textContent);
btnOperations.push(document.getElementById('subtraction').textContent);
btnOperations.push(document.getElementById('multiplication').textContent);
btnOperations.push(document.getElementById('division').textContent);
btnOperations.push(document.getElementById('del').textContent);
btnOperations.push(document.querySelector('.button-reset').textContent);
btnOperations.push(document.querySelector('.buttons-equal').textContent);

console.log(btnNumbers);
console.log(btnOperations);

selector.forEach(element =>{
    element.addEventListener('click', (e)=>{
        if (e.target.matches('button')) {
            if (screen.textContent === '0') {
                screen.textContent = e.target.textContent;
            }else{
                screen.textContent = screen.textContent + e.target.textContent;
            }
        }
    })
})