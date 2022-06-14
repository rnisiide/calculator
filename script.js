console.log(`Hello World!`)
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
const calculation = document.getElementById('calculation');
const negate = document.getElementById('negate');
const decimal = document.getElementById('decimal')
let calculationValue;
let inputValue = '';
let num;
let operator;

function changeValue(num) {
    if  (input.textContent == '0') {
        inputValue = num; input.textContent = inputValue;
        } else if (input.textContet != '0') {
        inputValue += num;
        input.textContent = inputValue;
}};

negate.addEventListener('click', function() {
    inputValue = -parseInt(inputValue);
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

function calculateUndefined(op) {
    operator = op;
    calculationValue = parseFloat(inputValue);
    calculation.textContent = `${inputValue} ${op}`;
    inputValue = '';
    input.textContent = inputValue;
} 
/*the function above looks complicated, but what it does is:
- get the selected operator and set it to the function
- get the inputed number
- display number and operator on top
- set input back to '' so user can input a new number 
this part is used when the user has cleared the console or refreshed the page,
and still hasn't inputed any number previously
*/

function calculateFinal(op) {
    calculationValue = operate(operator, calculationValue, 
        parseFloat(inputValue));
    operator = op;
    calculation.textContent = `${calculationValue} ${operator}`;
    inputValue = '';
    input.textContent = inputValue;}
/* the function above is triggered when the user has already inputed a number, selected an operator, and inputed a NEW number, and it will:
- do the math for the first arrangement
- set a new operator in case the user has selected a new one
- display operation and new operator 
- set input back to '' so user can input a new number 
*/

sum.addEventListener('click', function() {
    if (calculationValue == undefined) {        
        calculateUndefined('+');
    } else if (calculationValue != undefined) {
        if (inputValue == '') {
            operator = '+';
            calculation.textContent = `${calculationValue} ${operator}`;
        } else {
            calculateFinal('+')
        }}})

minus.addEventListener('click', function() {
    if (calculationValue == undefined) {
        calculateUndefined('-')
    } else if (calculationValue != undefined) {
        if (inputValue == '') {
            operator = '-';
            calculation.textContent = `${calculationValue} ${operator}`;
        } else {
            calculateFinal('-')
        }}})

multiplication.addEventListener('click', function() {
    if (calculationValue == undefined) {
        calculateUndefined('*')
    } else if (calculationValue != undefined) {
        if (inputValue == '') {
            operator = '*';
            calculation.textContent = `${calculationValue} ${operator}`;
        } else {
            calculateFinal('*')
        }}})

division.addEventListener('click', function() {
    if (calculationValue == undefined) {
        calculateUndefined('/')
    } else if (calculationValue != undefined) {
        if (inputValue == '0') {
            input.textContent = `Can't divide by zero. Please select another number!!`
        } else if (inputValue == '') {
            operator = '/';
            calculation.textContent = `${calculationValue} ${operator}`;
        } else {
            calculateFinal('/')
        }}})

equal.addEventListener('click', function () {
    if (inputValue == '') {
        clearConsole(0);
    } else {
    calculationValue = operate(operator, calculationValue, 
        parseFloat(inputValue));
    inputValue = '';
    clearConsole(0);
}})

function clearConsole(a) {
    input.textContent = calculationValue;
    calculation.textContent = '';
    calculationValue = a;
}

function operate(c, a, b) {
    if (c == '+') {return a + b};
    if (c == '-') {return a - b};
    if (c == '*') {return a * b};
    if (c == '/') {return a / b};
}

clear.addEventListener('click', function() {
    input.textContent = '0';
    calculation.textContent = '';
    calculationValue = 0;
})


//below are just key bindings to the same functions

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
                    if(calculationValue == undefined) 
                    {calculateUndefined(e.key)
                    } else if (calculationValue != undefined) {
                        if (inputValue == '') {
                        operator = e.key;
                        calculation.textContent = `${calculationValue} ${operator}`;
                        } else {
                        calculateFinal(e.key)
                    }}
    } else if (e.key == '/') {
        if (calculationValue == undefined) {
            calculateUndefined(e.key)
        } else if (calculationValue != undefined) {
            if (inputValue == '0') {
                input.textContent = `Can't divide by zero. Please select another number!!`
            } else if (inputValue == '') {
                operator = e.key;
                calculation.textContent = `${calculationValue} ${operator}`;
            } else {
                calculateFinal(e.key)
            }}
    } else if (e.key == 'Enter') {
        if (inputValue == '') {
            clearConsole(0);
        } else {calculationValue = operate(operator, calculationValue, 
            parseFloat(inputValue));
            inputValue = '';
            clearConsole(0);}
    } else if (e.key == '.' || e.key == ',') {
        if (inputValue.includes('.') == false) {
            inputValue += '.';
            input.textContent = inputValue;}
    } else if (e.key == 'Delete') {
        input.textContent = '0';
        calculation.textContent = '';
        calculationValue = 0;
    }
};