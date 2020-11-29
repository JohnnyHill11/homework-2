let operation = prompt('What operation do you want to do?', '+ - * /');
let firstNumber;
let secondNumber;
function calculator() {
  firstNumber = +prompt('Enter the first number');
  secondNumber = +prompt('Enter the second number');
}
calculator();
switch(operation) {
  case '+' : alert(`operation result  ${firstNumber} ${operation} ${secondNumber} = ` + (firstNumber + secondNumber)); break; 
  case '-' : alert(`operation result  ${firstNumber} ${operation} ${secondNumber} = ` + (firstNumber - secondNumber)); break;
  case '*' : alert(`operation result  ${firstNumber} ${operation} ${secondNumber} = ` + (firstNumber * secondNumber)); break;
  case '/' : alert(`operation result  ${firstNumber} ${operation} ${secondNumber} = ` + (firstNumber / secondNumber)); break;
} 