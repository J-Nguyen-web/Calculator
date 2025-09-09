let display =  document.getElementById('display')

function appendValue(value) {
    console.log(display.value)
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        // eval is built-in js function, its dangerous bcoz malicious code can be executed by others
        // later we will use other expressions
    } catch {
        display.value = 'Error'
    }
}