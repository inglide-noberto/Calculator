const btnNumbers = [];
const btnOperations = [];
const screen = document.querySelector('.screen-value');

btnNumbers.push( parseInt(document.getElementById('0').textContent));
btnNumbers.push( parseInt(document.getElementById('1').textContent));
btnNumbers.push( parseInt(document.getElementById('2').textContent));
btnNumbers.push( parseInt(document.getElementById('3').textContent));
btnNumbers.push( parseInt(document.getElementById('4').textContent));
btnNumbers.push( parseInt(document.getElementById('5').textContent));
btnNumbers.push( parseInt(document.getElementById('6').textContent));
btnNumbers.push( parseInt(document.getElementById('7').textContent));
btnNumbers.push( parseInt(document.getElementById('8').textContent));
btnNumbers.push( parseInt(document.getElementById('9').textContent));

btnOperations.push(document.getElementById('point').textContent);
btnOperations.push(document.getElementById('sum').textContent);
btnOperations.push(document.getElementById('subtraction').textContent);
btnOperations.push(document.getElementById('multiplication').textContent);
btnOperations.push(document.getElementById('division').textContent);
btnOperations.push(document.getElementById('del').textContent);
btnOperations.push(document.querySelector('.button-reset').textContent);
btnOperations.push(document.querySelector('.buttons-equal').textContent);

console.log( btnNumbers);
console.log( btnOperations);