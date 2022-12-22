import './style.css'
import { operatorList, doOperation, setOperands } from './logic';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
`;
const buttons = document.querySelectorAll('button');

const handleButtonClick = (button: HTMLButtonElement) => {
  let buttonValue: string = button.value;
  if (operatorList.find(operator =>  buttonValue === operator )) {
    doOperation(buttonValue);
    return;
  }
  setOperands(parseInt(buttonValue));
}

buttons.forEach(button => {
  button.addEventListener("click", () => handleButtonClick(button));
});