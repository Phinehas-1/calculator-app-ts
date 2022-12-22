import './style.css'
import { operands, operatorList, doOperation, setOperands } from './logic';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
`;
const output_container = document.getElementById("output-container");
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener("click", () => handleButtonClick(button));
});

const handleButtonClick = (button: HTMLButtonElement) => {
  let buttonValue: string = button.value;
  if (operatorList.find(operator =>  buttonValue === operator )) {
    doOperation(buttonValue);
    return;
  }
  setOperands(parseInt(buttonValue));
  displayOutput();
}

const displayOutput = () => {
  let displayValue = operands[0];
  // TODO 
  output_container!.innerHTML = `${displayValue}`;
}

