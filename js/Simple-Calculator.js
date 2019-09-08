const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const result = document.querySelector('.result');


plus.addEventListener('click', () => result.innerText = parseInt(firstNumber.value) + parseInt(secondNumber.value));
minus.addEventListener('click', () => result.innerText = parseInt(firstNumber.value) - parseInt(secondNumber.value));
multiply.addEventListener('click', () => result.innerText = parseInt(firstNumber.value) * parseInt(secondNumber.value));
divide.addEventListener('click', () => result.innerText = parseInt(firstNumber.value) / parseInt(secondNumber.value));

