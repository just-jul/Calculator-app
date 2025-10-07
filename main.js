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

const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");