let display =  document.getElementById('display');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let reset= false;

function appendValue(value) {
    if (reset){
        display.value = '';
        reset = false;
    }
    
    if (operator === '') {
        firstNumber += value;
        console.log(firstNumber)
        display.value = firstNumber;
    } else {
        secondNumber += value;
        display.value = secondNumber;
    }
}

function setOperator(op){
    if(firstNumber === '') return;
    if(secondNumber !== '') calculate();
    operator = op;
    reset = true;
    
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
}

function calculate() {
    
        // display.value = eval(display.value);
        // eval is built-in js function, its dangerous bcoz malicious code can be executed by others
        // later we will use other expressions

    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        default:
            return;
    }
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
}