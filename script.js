
console.log('working')

var result = document.getElementById("display");
var buttons = document.getElementsByClassName("box");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (
      value === "+" ||
      value === "/" ||
      value === "+/-" ||
      value === "*" ||
      value === "-" ||
      value === "%"
    ) {
      operator = value;
      operand1 = parseFloat(result.value);
      result.value = "";
    } else if (value === "=") {
      operand2 = parseFloat(result.value);
      calculate();
    } else if (value === "AC") {
      clear();
    } else {
      result.value += value;
    }
  });
}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    var validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '/', '*', '-', '%', '=', 'Enter', 'Escape'];
  
    if (validKeys.includes(key)) {
      event.preventDefault();
  
      if (key === 'Enter') {
        key = '=';
      } else if (key === 'Escape') {
        key = 'AC';
      }
  
      var button = document.querySelector('button[data-value="' + key + '"]');
      if (button) {
        button.click();
      }
    }
  });

function calculate() {
  if (operator) {
    operand2 = parseFloat(result.value);
    var tempResult = 0;

    switch (operator) {
      case "+":
        tempResult = operand1 + operand2;
        break;
      case "/":
        tempResult = operand1 / operand2;
        break;
      case "+/-":
        tempResult = -operand1;
        break;
      case "*":
        tempResult = operand1 * operand2;
        break;
      case "-":
        tempResult = operand1 - operand2;
        break;
      case "%":
        tempResult = (operand1 * operand2) / 100;
        break;
    }

    result.value = tempResult;
    operand1 = tempResult;
    operand2 = null;
    operator = null;
  }
}

function clear() {
  result.value = "";
  operand1 = 0;
  operand2 = null;
  operator = null;
}
