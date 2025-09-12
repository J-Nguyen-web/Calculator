// let display =  document.getElementById('display');
let expressionDisplay =  document.getElementById('expression');
let resultDisplay =  document.getElementById('result');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let reset= false;

function appendValue(value) {
    if (reset){
        secondNumber = '';
        reset = false;
    }
    
    if (operator === '') {
        if(result === '') {
            firstNumber = '';
            resultDisplay.textContent = '';
        }
        firstNumber += value;
        expressionDisplay.textContent = firstNumber;
    } else {
        secondNumber += value;
        expressionDisplay.textContent = firstNumber + ' ' + operator + ' '+ secondNumber;
    }
}

function setOperator(op){
    if(firstNumber === '') return;
    if(secondNumber !== '') calculate();
    operator = op;
    reset = true;
    expressionDisplay.textContent = firstNumber + ' ' + operator
    
}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    expressionDisplay.textContent = '';
    resultDisplay.textContent = '';
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
            result = num1 / num2 !== 0 ? num1 / num2 : "Error";
        break;
        default:
            return;
    }
    resultDisplay.textContent = result;
    expressionDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';

    
}

function percent() {
    
    let result;

    if(firstNumber !== '' && operator !== '' && secondNumber !== '') {
        let thePercent = (parseFloat(secondNumber) / 100);

    switch (operator) {
    case '+':
        result = firstNumber + (firstNumber * thePercent);
    break;
    case '-':
        result = firstNumber - (firstNumber * thePercent);
    break;
    case '*':
        result = firstNumber * (firstNumber * thePercent);
    break;
    case '/':
        result = firstNumber / (firstNumber * thePercent) !== 0 ? firstNumber / thePercent : "Error";
    break;
    default:
        return;
    }
        resultDisplay.textContent = result ;
        expressionDisplay.textContent = `${firstNumber}  ${operator} ${firstNumber * thePercent} (${secondNumber}%)`
    }
}

function square() {
    if(firstNumber !== '' && operator === '' && secondNumber ==='') {
        firstNumber = (parseFloat(firstNumber) * parseFloat(firstNumber)).toString();
        resultDisplay.textContent = firstNumber;;
        expressionDisplay.textContent = `sqr(${resultDisplay.textContent})`
    }
}

function squareRoot() {
    
}