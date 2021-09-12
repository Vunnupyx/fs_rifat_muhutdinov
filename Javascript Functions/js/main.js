let currentSolution = null;
let currentDigits = "";
let floatingPosition = 0;
let currentOperand = null;

// document.querySelectorAll('.calc-button-digit').forEach(function (button) {
//     button.addEventListener('click', onDigitClick)
// })
// document.querySelectorAll('.calc-button-operand').forEach(function (button) {
//     button.addEventListener('click', onOperandClick)
// })
// document.querySelectorAll('.calc-button-func').forEach(function (button) {
//     button.addEventListener('click', onFuncClick)
// })

//Каррирование и замыкание
function addHandler(className) {
    let arraySelectors = document.querySelectorAll(className)
    return function (funcName) {
        arraySelectors.forEach((button) => {
            button.addEventListener('click', funcName)
        })
    }
}

addHandler('.calc-button-digit')(onDigitClick)
addHandler('.calc-button-operand')(onOperandClick)
addHandler('.calc-button-func')(onFuncClick)


function onDigitClick() {
    let digit = this.getAttribute("data-digit")

    switch (digit) {
        case '.':
            if (floatingPosition === 0 && currentDigits) {
                currentDigits = currentDigits + digit;
                floatingPosition++;
            }
            break;
        case '0':
            if (currentDigits) {
                currentDigits = currentDigits + digit;
                if (floatingPosition > 0)
                    floatingPosition++;
            }
            break;
        case digit:
            if (digit !== '.' && digit != null) {
                currentDigits = currentDigits + digit;
                if (floatingPosition > 0)
                    floatingPosition++;
            }
            break;
        default:
            console.warn('Invalid digit: ' + digit);
            break;
    }
    /* if (digit === '.' && floatingPosition === 0 && currentDigits) {
         currentDigits = currentDigits + digit;
         floatingPosition++;
     } else if (digit !== '.') {
         currentDigits = currentDigits + digit;
         if (floatingPosition > 0)
             floatingPosition++;
     }*/

    updateSolution()
}

function onFuncClick() {
    const func = this.getAttribute('data-func');

    switch (func) {
        case 'reset':
            currentSolution = null;
            currentDigits = "";
            floatingPosition = 0;
            currentOperand = null;
            break;
        case 'cancel':
            currentDigits = currentDigits.substring(0, currentDigits.length - 1)
            if (floatingPosition !== 0)
                floatingPosition--;
            break;
        case 'plus-minus':
            if (currentDigits)
                currentDigits = -currentDigits;
            break;
        case 'percentage':
            if (currentDigits)
                currentDigits /= 100;
            break;
        case 'sqrt':
            if (currentDigits)
                currentDigits = Math.sqrt(currentDigits);
            break;
        default:
            console.warn('Invalid button functionality: ' + func);
            break;
    }

    updateSolution();
}

function onOperandClick() {
    switch (currentOperand) {
        case 'multiply':
            if (currentSolution)
                currentSolution = multiply(currentSolution)(currentDigits);
            break;
        case 'divide':
            if (currentSolution)
                currentSolution = divide(currentSolution)(currentDigits);
            break;
        case 'plus':
            if (currentSolution)
                currentSolution = plus(currentSolution)(currentDigits);
            break;
        case 'minus':
            if (currentSolution)
                currentSolution = minus(currentSolution)(currentDigits);
            break;
        case 'pow':
            if (currentSolution)
                currentSolution = pow(currentSolution)(currentDigits);
            break;
        default:
            // First operand clicked
            if (!currentSolution && currentDigits)
                currentSolution = parseFloat(currentDigits);
            break;
    }

    currentDigits = "";
    floatingPosition = 0;

    const clickedOperand = this.getAttribute('data-operand');
    currentOperand = clickedOperand === 'solution' ? null : clickedOperand;

    updateSolution();
}


function multiply(ar1) {
    return function (ar2) {
        return parseFloat(ar1) * parseFloat(ar2);
    }
}

function divide(ar1) {
    return function (ar2) {
        return parseFloat(ar1) / parseFloat(ar2);
    }
}

function plus(ar1) {
    return function (ar2) {
        return parseFloat(ar1) + parseFloat(ar2);
    }
}

function minus(ar1) {
    return function (ar2) {
        return parseFloat(ar1) - parseFloat(ar2);
    }
}

function pow(ar1) {
    return function (ar2) {
        return Math.pow(parseFloat(ar1), parseFloat(ar2));
    }
}

function updateSolution() {
    let solution = document.querySelector(".calc-solution")
    let currentInteger;

    if (currentDigits !== "") {
        currentInteger = currentDigits;
    } else {
        currentInteger = currentSolution;
    }

    solution.innerHTML = currentInteger
}
