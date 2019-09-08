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


// one-time event
// onetime(document.getElementById("myelement"), "click", handler);

// handler function
// function handler(e) {
// 	alert("You'll only see this once!");
// }

opers.forEach ( buttonOper => buttonOper.addEventListener('click', operPressed));

function operPressed(event) {
    const oper = event.target.innerText;
    display.value += oper;
    for(let i = 0; i < opers.length; i++){
     if (display.value.includes(opers[i].innerText)) {
         display.value += event.target.innerText;
     }
    }
}

equal.addEventListener('click', () => display.value = eval(display.value) );

clear.addEventListener('click', () => display.value = '' );



back.addEventListener('click', backSpace());

 function backSpace(){
    let exp = display.value;
//    display.value = exp.substring(0,exp.length-1)
    if ( exp.length > 0 ) {
        exp = exp.substring(0, exp.length - 1);
        display.value = exp;
    }
}



// function one() {
//     let backSpace = back.form.text.value;
//     bakcSpace = backSpace.substring(0, backSpace.length - 1);
// }



// function numClear() {
//     clear.form.value = '';
// }
