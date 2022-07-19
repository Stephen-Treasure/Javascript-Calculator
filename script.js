let currentValue = "";
let operatorValue = "";
let nextValue = "";
let tempValue = "";

const btns = document.querySelectorAll(".btn");
console.log(btns);
const operators = document.querySelectorAll(".operator");
const dot = document.getElementById(".");

const equal = document.getElementById("=");
let input = document.getElementById("input");

const clear = document.getElementById("C");

const calculate = (op, num1, num2) => {
    let result = 0;
    switch (op) {
        case "+":
            result = parseFloat(num1) + parseFloat(num2);

            break;
        case "-":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case "%":
    }
    return result;
};

let counter = 0;
dot.addEventListener("click", () => {
    input.value += dot.value;
});

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operatorValue === "") {
            currentValue += btn.value;
            console.log(currentValue);
            input.value = currentValue;
        } else {
            nextValue += btn.value;
            console.log(nextValue);
            input.value = nextValue;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operatorValue = operator.value;
        console.log(operatorValue);
        input.value = operatorValue;
    });
});

equal.addEventListener("click", () => {
    console.log(calculate(operatorValue, currentValue, nextValue));

    input.value = calculate(operatorValue, currentValue, nextValue);

    currentValue = calculate(operatorValue, currentValue, nextValue);
    operatorValue = "";
    nextValue = "";
});

clear.addEventListener("click", () => {
    currentValue = "";
    operatorValue = "";
    nextValue = "";
    input.value = "";
});
