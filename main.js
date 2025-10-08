function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(opr, num1, num2){
    if (opr === "add"){
        add(num1, num2);
    }else if(opr === "substract"){
        substract(num1, num2);
    }else if(opr === "multiply"){
        multiply(num1, num2);
    }else if (opr === "divide"){
        divide(num1, num2);
    }
}

const addBtn = document.querySelector(".add");
const substrBtn = document.querySelector(".substr");
const multBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const resultText = document.querySelector(".result-text");

const numberBtn = document.querySelectorAll(".number");
const btn = document.querySelectorAll(".btn");

const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

let operatorUsed = false;

numberBtn.forEach(btn => {
    btn.onclick = () => {
        resultText.textContent += btn.textContent;
        if (resultText.textContent.length > 30) {
            alert("Number too big!");
            resultText.textContent = "";
        }
    }
});

function handleOperator (op){
    if (!operatorUsed && resultText.textContent !== ''){
        resultText.textContent += op;
        operatorUsed = true;
    }else{
        console.log("Operator already used.");
    }
}

addBtn.onlick = () => handleOperator('+');
substrBtn.onlick = () => handleOperator('-');
multBtn.onclick = () => handleOperator('*');
divideBtn.onlick = () => handleOperator('/');

clearBtn.onclick = () => {
    resultText.textContent = '';
}