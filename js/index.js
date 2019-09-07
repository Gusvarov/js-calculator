const nums = document.querySelectorAll('.numbers button');
const opers = document.querySelectorAll('.opers');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed));
function numPressed(event) {
    const num = event.target.innerText;
    display.value += num;
}
opers.forEach ( buttonOper => buttonOper.addEventListener('click', operPressed));

function operPressed(event) {
    const oper = event.target.innerText;
    display.value += oper;
}

equal.addEventListener('click', () => display.value = eval(display.value) );

