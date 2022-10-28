const selector = document.querySelectorAll('.selector');
const screen = document.querySelector('.screen-value');

let pressed = false;
let value1;
let op;
selector.forEach(element => {
    element.addEventListener('click', (e) => {
        const buttonValue = e.target;
        const action = buttonValue.dataset.operation;
        
        const result = (n1, n2, op) => {
            let res = '';
            switch (op) {
                case 'sum':
                    res = parseFloat(n1) + parseFloat(n2);
                    break;
                case 'subtraction':
                    res = parseFloat(n1) - parseFloat(n2);
                    break;
                case 'multiplication':
                    res = parseFloat(n1) * parseFloat(n2);
                    break;
                case 'division':
                    res = parseFloat(n1) / parseFloat(n2);
                    break;
                default:
                    console.log(err);
            }
            return res;
        }
        if (buttonValue.matches('button') && !action) {
            if (screen.textContent === '0' || pressed === true) {
                screen.textContent = buttonValue.textContent;
                pressed = false;
            }else {
                screen.textContent = screen.textContent + buttonValue.textContent;
            }
        } else if (
            action === 'sum' ||
            action === 'subtraction' ||
            action === 'division' ||
            action === 'multiplication'
        ) {
            value1 = screen.textContent;
            op = action;
            pressed = true;
        } else if (action === 'point') {
                screen.textContent = screen.textContent + '.';
        } else if (action === 'equals') {
            console.log(value1);
            const value2 = screen.textContent;
            console.log(value2);
            console.log(op);
            screen.textContent = result(value1, value2, op)
        }else if (action === 'reset' || action === 'del') {
            screen.textContent = '';
            screen.textContent = '0';
        }
    })
})
