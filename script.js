console.log(`Welcome to the most advanced CALCULATOR!!!`)
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const sum = document.getElementById('sum');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const input = document.getElementById('input');
const display = document.getElementById('display');
const negate = document.getElementById('negate');
const decimal = document.getElementById('decimal');
const backspace = document.getElementById('backspace');
let calculationValue;
let inputValue = '';
let num;
let operator;
let deletedString;

function changeValue(num) {
    if  (input.textContent == '0') {
        inputValue = num; input.textContent = inputValue;
        } else if (input.textContet != '0') {
        inputValue += num;
        input.textContent = inputValue;
}};

negate.addEventListener('click', function() {
    inputValue = -parseFloat(inputValue);
    input.textContent = inputValue;
});

decimal.addEventListener('click', function() {
    if (inputValue.includes('.') == false) {
        inputValue += '.';
        input.textContent = inputValue;
}})


one.addEventListener('click', function() {
    num = '1';
    changeValue(num);
})

two.addEventListener('click', function() {
    num = '2';
    changeValue(num);
})

three.addEventListener('click', function() {
    num = '3';
    changeValue(num);
})

four.addEventListener('click', function() {
    num = '4';
    changeValue(num);
})

five.addEventListener('click', function() {
    num = '5';
    changeValue(num);
})

six.addEventListener('click', function() {
    num = '6';
    changeValue(num);
})

seven.addEventListener('click', function() {
    num = '7';
    changeValue(num);
})

eight.addEventListener('click', function() {
    num = '8';
    changeValue(num);})

nine.addEventListener('click', function() {
    num = '9';
    changeValue(num);
})

zero.addEventListener('click', function() {
    num = '0';
    changeValue(num);
})

backspace.addEventListener('click', function() {
    deletedString = inputValue.slice(0, -1);
    inputValue = deletedString;
    input.textContent = inputValue;
})



sum.addEventListener('click', () => {startButton('+')});
minus.addEventListener('click', () => {startButton('-')});
multiplication.addEventListener('click', () => {startButton('*')});
division.addEventListener('click', () => {startButton('/')})
clear.addEventListener('click', () => {clearConsole()})

function startButton(op) {
        if (calculationValue == undefined) {
            inputValue = input.textContent;
            operator = op;
            calculationValue = parseFloat(inputValue);
            display.textContent = `${inputValue} ${op}`;
            inputValue = '';
            input.textContent = inputValue;           
        } else if (calculationValue != undefined) {
             if (inputValue == '') {
                operator = op;
                display.textContent = `${calculationValue} ${operator}`;
            } else if (display.textContent == '') {
                operator = op;
                calculationValue = parseFloat(inputValue);
                display.textContent = `${calculationValue} ${operator}`;
                inputValue = '';
                input.textContent = inputValue; 
            } else {
                calculationValue = operate(operator, calculationValue, 
                    parseFloat(inputValue));
                operator = op;
                display.textContent = `${calculationValue} ${operator}`;
                inputValue = '';
                input.textContent = inputValue;
            }}}

 /*FUNCTION EXPLANATION:
When undefined:
- get the selected operator and set it to the function
- get the inputed number
- display number and operator on top
- set input back to '' so user can input a new number 
this part is used when the user has cleared the console or refreshed the page,
and still hasn't inputed any number previously

The second part, the function is triggered when the user has already inputed a number, selected an operator, and inputed a NEW number, and it will:
- do the math for the first arrangement
- set a new operator in case the user has selected a new one
- display operation and new operator 
- set input back to '' so user can input a new number 
*/

function operate(c, a, b) {
    if (c == '/' && inputValue == '0') {
        alert(`Can't divide by zero. You destroyed the calculator.\n\nRebooting calculator!!`);
        clearConsole();
        return 0;
    } else if (c == '+') {return a + b;
    } else if (c == '-') {return a - b;
    } else if (c == '*') {return a * b;
    } else if (c == '/') {return a / b
}}
      

equal.addEventListener('click', () => { equalize() });

function equalize() {   
    if (inputValue == '') {
        input.textContent = calculationValue;
        display.textContent = '';
    } else {      
        console.log(`Antes: inputvalue ${inputValue} calculationvalue ${calculationValue}`)
    calculationValue = operate(operator, calculationValue, 
        parseFloat(inputValue));
    input.textContent = calculationValue;
    display.textContent = '';
    inputValue = '';
}};




function clearConsole() {
    input.textContent = '0';
    display.textContent = '';
    calculationValue = 0;
}

/*
below are just key bindings. functions are just repeated. 
on a later moment will revisit and try to bind everything without 
repeating all functions and buttons
*/

window.onkeydown = function (e) {
    console.log(e);
    if( e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9' ||
        e.key == '0') {
            num = e.key;
            changeValue(num);
    } else if (e.key == '+' ||
                e.key == '-' ||
                e.key == '*') { 
                    startButton(e.key);
    } else if (e.key == '/') {
        startButton(e.key);
    } else if (e.key == 'Enter') {
        equalize();
    } else if (e.key == '.' || e.key == ',') {
        if (inputValue.includes('.') == false) {
            inputValue += '.';
            input.textContent = inputValue;}
    } else if (e.key == 'Delete') {
        input.textContent = '0';
        display.textContent = '';
        calculationValue = 0;
    } else if (e.key == 'Backspace') {
        deletedString = inputValue.slice(0, -1);
        inputValue = deletedString;
        input.textContent = inputValue;
    }
};
