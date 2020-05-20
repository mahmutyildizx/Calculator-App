let total = 0;
let screenValue = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

document.querySelector(".calcButtons").addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
});

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        symbolHandler(value);
    } else {
        numberHandler(value);
    }
    reRender();
}

function reRender() {
    screen.innerText = screenValue;
}

function numberHandler(value) {
    if(screenValue === "0") {
        screenValue = value;
    } else {
        screenValue += value;
    }
}

function symbolHandler(value) {
    switch (value) {
        case "C":
            screenValue = "0";
            total = 0;
            previousOperator = null;
            break;

        case "=":
        if (previousOperator === null) {
            return;
        }
        arithmeticOperation(parseInt(screenValue));
        previousOperator = null;
        screenValue = "" + total;
        total = 0;
        break;

        case "⬅": 
        if (screenValue.length === 1) {
            screenValue === "0";
        } else {
            screenValue = screenValue.substring(0, screenValue.length - 1);
        }
        break;

        default:
            handleMath(value);
            break;
    }

}
function handleMath(value) {
    const intScreenValue = parseInt(screenValue);
    if(total === 0) {
        total = intScreenValue;
    } else {
        arithmeticOperation(intScreenValue)
    }
    previousOperator = value;
    screenValue = "0";
}

function arithmeticOperation(intScreenValue) {
    if(previousOperator === "+") {
        total += intScreenValue;
    } else  if(previousOperator === "-") {
        total -= intScreenValue;
    } else  if(previousOperator === "×") {
        total *= intScreenValue;
    } else {
        total /= intScreenValue;
    }
}

