const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const resultText = document.querySelector(".result-text");

const numberBtn = document.querySelectorAll(".number");
const btn = document.querySelectorAll(".btn");
const operator = document.querySelectorAll(".operator");


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}


// function performing the calculation
function operate(operation, num1, num2){
    const firstNum = parseFloat(num1);
    const secondNum = parseFloat(num2);

    switch(operation){
        case 'add': return add(firstNum, secondNum);
        case 'subtract': return subtract(firstNum, secondNum);
        case 'multiply': return multiply(firstNum, secondNum);
        case 'divide': 
            if (secondNum !== 0){
                return divide(firstNum, secondNum);
            }else{
                alert("Can't divide by 0.");
                return null;
            }
        default: return null;
    }
};


function getOperationName(op){
    switch(op){
        case '+': return 'add';
        case '-': return 'subtract';
        case 'x': return 'multiply';
        case '/': return 'divide';
        default: return null;
    }
};


let num1 = '';
let num2 = '';
let currentOperator = '';
let isNum2 = false;


numberBtn.forEach(btn => {
    btn.onclick = () => {
        const num = btn.textContent;

        // append input to display 
        resultText.textContent += num;

        // if the 2nd digit wasn't input, append to 1st digit
        if (!isNum2){
            num1 += num;
        }else{
            num2 += num;
        }

        // if the number of digits exceeds 30
        if (num1.length > 20 || num2.length > 20) {
            alert("Number too big!");
            resultText.textContent = "";
            num1 = '';
            num2 = '';
            currentOperator = '';
            isNum2 = false;
        }
    }
});



operator.forEach(btn => {
    btn.onclick = () => {
        const lastChar = resultText.textContent.slice(-1); // get last input character
        const currentOp = btn.textContent;

        // Only add the operator if the last char is not another operator
        if (['+', '-', 'x', '/'].includes(lastChar)){
            return;
        }

        if (num1 !== '' && currentOperator !== '' && num2 !== ''){
            const operation = getOperationName(currentOp);
            const result = operate(operation, num1, num2);

            resultText.innerText = result + currentOp;

            num1 = result.toString(); // store result as the new first number
            num2 = ''; // reset the second number 
            currentOperator = currentOp; // store the new operator the user just clicked
            isNum2 = true; // signal that we are now typing the second number
        }else{ // if there's not enough info - user only typed in 1st number
            resultText.textContent += currentOp;
            currentOperator = currentOp;
            isNum2 = true; // start listening for second number
        }
    };
});


clearBtn.onclick = () => {
    resultText.textContent = '';
    num1 = '';
    num2 = '';
    currentOperator = '';
    isNum2 = false;
}

equalBtn.onclick = () => {
    if (num1 === '' || currentOperator === '' || num2 === '') {
        return; 
    }
    const operation = getOperationName(currentOperator);
    const result = operate(operation, num1, num2);
    const roundedResult = parseFloat(result.toFixed(8));
  
    resultText.textContent = roundedResult;

    num1 = roundedResult.toString();
    num2 = '';
    currentOperator = '';
    isNum2 = false;
}