const operation = getOperation();
function getOperation() {
  let operation;
  do {  
    operation = prompt('What operation do you want to do?', '+ - * /');
  }
  while (operation != '+' && operation != '-' && operation != '*' && operation != '/');
  return operation;
}
const firstNumber = getNumber('first');
const secondNumber = getNumber('second');
function getNumber(numberName) {
  let number;
  while (!isNumeric(number)) {
    number = +prompt('Enter the ' + numberName + ' number')
  }
  return number;
}
function isNumeric(number) {
  return !isNaN(number);
}
const result = calculator(operation, firstNumber, secondNumber);
function calculator( operator, firstOperand, secondOperand) {
  let result;
  switch(operator) {
    case '+' : result = firstOperand + secondOperand; break; 
    case '-' : result = firstOperand - secondOperand; break;
    case '*' : result = firstOperand * secondOperand; break;
    case '/' : result = firstOperand / secondOperand; break;
  } 
  return result;
}
showResult(operation, firstNumber, secondNumber, result);
function showResult(operator, firstOperand, secondOperand, total) {
  alert(`operation result  ${firstOperand} ${operator} ${secondOperand} = ${total}`);
}