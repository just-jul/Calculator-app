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