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
opers.forEach(buttonOper => buttonOper.addEventListener('click', operPressed));
function operPressed(ev) {
    const oper = ev.target.innerText;
    if (!display.value.includes('-')
        && !display.value.includes('+')
        && !display.value.includes('/')
        && !display.value.includes('*')) {
        display.value += oper;
    } else if (display.value.charAt(display.value.length - 1) === '-'
               || display.value.charAt(display.value.length - 1) === '+'
               || display.value.charAt(display.value.length - 1) === '*'
               || display.value.charAt(display.value.length - 1) === '/') {
        let text = display.value.split('');
        text.pop();
        text.push(oper);
        display.value = text.join('');
    }
}

equal.addEventListener('click', notAZero);

function notAZero() {
     const notZero = eval(display.value);
      if(!(notZero === Number.POSITIVE_INFINITY) && !(text === Number.NEGATIVE_INFINITY)){
         display.value = notZero;
      } else {
          display.value = 'Error';
      }
 }

clear.addEventListener('click', () => display.value = '' );

back.addEventListener('click', () => display.value = display.value.substring(0, display.value.length - 1 ));




