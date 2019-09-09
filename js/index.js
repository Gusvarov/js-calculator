const nums = document.querySelectorAll('.numbers button');
const opers = document.querySelectorAll('.opers');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed));
function numPressed(event) {
    const num = event.target.innerText;
    display.value += num;
}

opers.forEach ( buttonOper => buttonOper.addEventListener('click', operPressed));

function operPressed(event) {
    let oper = event.target.innerText;
    display.value += oper;
    for (let i = 0; i < opers.length; i++){
        if (display.value.includes(opers[i].innerText)) {
            display.value += event.target.innerText;
        }
    }
}


equal.addEventListener('click', () => display.value = eval(display.value) );

clear.addEventListener('click', () => display.value = '' );

back.addEventListener('click', () => display.value = display.value.substring(0, display.value.length - 1 ));




