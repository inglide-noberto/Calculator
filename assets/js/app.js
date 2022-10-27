const selector = document.querySelectorAll('.selector');
const screen = document.querySelector('.screen-value');

selector.forEach(element => {
    element.addEventListener('click', (e) => {
        const buttonValue = e.target;
        const action = buttonValue.dataset.operation;
        if (buttonValue.matches('button') && !action) {
            if (screen.textContent === '0') {
                screen.textContent = buttonValue.textContent;
            } else {
                screen.textContent = screen.textContent + buttonValue.textContent;
            }
        } else if (
            action === 'sum' ||
            action === 'subtraction' ||
            action === 'division' ||
            action === 'multiplication'
        ) {
            const value1 = parseFloat(screen.textContent);
            console.log(value1)

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
    function operation() {

    }
})
