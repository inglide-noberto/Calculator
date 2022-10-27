const selector = document.querySelectorAll('.selector');
const screen = document.querySelector('.screen-value');

let press = false;

selector.forEach(element => {
    element.addEventListener('click', (e) => {
        const buttonValue = e.target;
        const action = buttonValue.dataset.operation;
        if (buttonValue.matches('button') && !action) {
            if (screen.textContent === '0' || press === true) {
                screen.textContent = buttonValue.textContent;
                press ? buttonValue.removeAttribute('disabled') : console.log("desabilitado")
                console.log(press)
            } else {
                screen.textContent = screen.textContent + buttonValue.textContent;
                console.log(press)
            }
        } else if (
            action === 'sum' ||
            action === 'subtraction' ||
            action === 'division' ||
            action === 'multiplication'
        ) {
            const value1 =  parseInt(screen.textContent);
            buttonValue.setAttribute('disabled', '');
            press = true;
        } else {
            switch (action) {
                case 'point':
                    screen.textContent = screen.textContent + ",";
                    break;
                case 'del':
                    screen.textContent = "0";
                    break;
                case 'reset':
                    screen.textContent = "0";
                    break;
                case 'sum':
                    screen.textContent = "0";
                    break;
                case 'subtraction':
                    screen.textContent = "0";
                    break;
                case 'division':
                    screen.textContent = "0";
                    break;
                case 'multiplication':
                    screen.textContent = "0";
                    break;
                case 'equals':
                    screen.textContent = "0";
                    break;
            }
        }
    })
})
