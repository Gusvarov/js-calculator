const nums = document.querySelectorAll('.numbers button');
const opers = document.querySelectorAll('.opers');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');

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
back.addEventListener('click', backs());

 function backs(){
    let exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
}
// clear.addEventListener('click', () => clear.form.value );







// function one() {
//     let backSpace = back.form.text.value;
//     bakcSpace = backSpace.substring(0, backSpace.length - 1);
// }



// function numClear() {
//     clear.form.value = '';
// }
