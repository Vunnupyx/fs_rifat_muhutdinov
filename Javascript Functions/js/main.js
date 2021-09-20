let currentSolution = null;
let currentDigits = "";
let floatingPosition = 0;
let currentOperand = null;

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
    if (currentDigits.length < 8)
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

    updateSolution()
}

function onFuncClick() {
    const func = this.getAttribute('data-func');

    if (currentDigits || currentSolution)
        switch (func) {
            case 'reset':
                currentSolution = null;
                currentDigits = "";
                floatingPosition = 0;
                currentOperand = null;
                break;
            case 'cancel':
                if (currentDigits)
                    currentDigits = currentDigits.substring(0, currentDigits.length - 1);
                else if (currentSolution)
                    currentSolution = currentSolution.substring(0, currentDigits.length - 1);
                if (floatingPosition !== 0)
                    floatingPosition--;
                break;
            case 'plus-minus':
                if (currentDigits)
                    currentDigits = -currentDigits;
                else if (currentSolution)
                    currentSolution = -currentSolution;
                break;
            case 'percentage':
                if (currentDigits)
                    currentDigits /= 100;
                else if (currentSolution)
                    currentSolution /= 100;
                break;
            case 'sqrt':
                if (currentDigits)
                    currentDigits = Math.sqrt(currentDigits);
                else if (currentSolution)
                    currentSolution = Math.sqrt(currentSolution);
                break;
            default:
                console.warn('Invalid button functionality: ' + func);
                break;
        }
    if (String(currentDigits).length > 8)
        currentDigits = currentDigits.toExponential(4);
    else if (String(currentSolution).length > 8)
        currentSolution = currentSolution.toExponential(4);

    updateSolution();
}

function onOperandClick() {
    if (currentDigits)
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

    if (currentSolution) {
        const clickedOperand = this.getAttribute('data-operand');
        currentOperand = clickedOperand === 'solution' ? null : clickedOperand;
    }

    if (String(currentSolution).length > 8)
        currentSolution = currentSolution.toExponential(4);
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
