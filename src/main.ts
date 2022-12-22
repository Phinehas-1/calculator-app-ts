import './style.css'
import { operands, operatorList, setOperands } from './logic';

export let operator: string;
const output_container = document.getElementById("output-container");
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener("click", () => handleButtonClick(button));
});

const handleButtonClick = (button: HTMLButtonElement) => {
  let buttonValue: string = button.value;
  if (operatorList.find(operator => operator === buttonValue)) {
    operator = buttonValue;
    if (operator === "clr") {
      resetCalculator();
    }
    return;
  }
  if (operator === undefined) {
    operator = operatorList[0];
  }
  setOperands(parseInt(buttonValue));
  displayOutput();
}

const displayOutput = () => {
  if (operands.length == 0) {
    output_container!.innerHTML = `0`;
    return;
  }
  output_container!.innerHTML = `${operands[0].toFixed(1) }`;
}

const resetCalculator = () => {
  operands.forEach(() => { operands.pop() });
  operator = operator[0];
  displayOutput();
}