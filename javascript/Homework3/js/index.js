
function calculation (num1, num2, operation) {
    let answer;
    switch (operation) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
    }
    return answer;

}
let number1 = Number (prompt("Please enter first number"));
let number2 = Number (prompt("Please enter second number"));
let operation = prompt ("Please enter any operation example +, -, *, /,");
console.log(calculation(number1,number2,operation));
