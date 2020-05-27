// variables for DOM elements
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const equalBtn = document.querySelector("#eq");

// functions for mathematical operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// set up calculator variables
let currentOperator = null;
let num1 = 0;
let num2 = 0;

// function to evaluate mathematical expression
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            if (num2 === "0") {
                return "Error: Can't divide by zero";
            } else {
                return divide(num1, num2);
                break;
            }
    }
}

// button functionality
numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (input.innerText != "0") {
            input.textContent += e.target.innerText;
        } else {
            input.textContent = e.target.innerText;
        }
    })
})

operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        num1 = input.innerText;
        input.textContent += e.target.innerText;
        currentOperator = e.target.innerText;
    })
})

clearBtn.addEventListener('click', () => {
    input.innerText = "0";
    output.innerText = "0";
});

backBtn.addEventListener('click', () => {
    input.innerText = input.innerText.substring(0, input.innerText.length - 1);
})

equalBtn.addEventListener('click', () => {
    num2 = input.innerText.split(currentOperator).pop();
    operate(currentOperator, num1, num2);
    let result = operate(currentOperator, num1, num2);
    output.innerText = result;
})
