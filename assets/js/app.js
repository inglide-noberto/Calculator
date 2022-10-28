const selector = document.querySelectorAll('.selector');
const screen = document.querySelector('.screen-value');

let pressed = false;
let value1;
let value2;
let resultValue;
let op;

let themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", () => {
  let targetTheme;
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "one") {
    targetTheme = "two";
  } else {
    targetTheme = "three";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
});


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
            } else {
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
        }
        else if (action === 'point') {
            if (!screen.textContent.includes('.')) {
                screen.textContent = screen.textContent + '.';
            }
        } else if (action === 'equals') {
            console.log(value1);
            value2 = screen.textContent;
            console.log(value2);
            console.log(op);
            resultValue = result(value1, value2, op);
            console.log(resultValue)
            screen.textContent = resultValue
        } else if (action === 'reset' || action === 'del') {
            window.location.reload(true);
        }
    })
})
