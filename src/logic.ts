import { operator } from "./main";

export let operands: number[] = [];
export let operatorList: string[] = ["+", "-", "*", "/", "=", "clr"];

export const setOperands = (operand: number) => {
    operands.push(operand);
    doOperation(operator);
    if (operands.length > 1) {
        operands.pop();
    }
}

export const doOperation = (operator: string) => {
    switch (operator) {
        case '+': operands[0] = operands.reduce((a, b) =>  a + b); break;
        case '*': operands[0] = operands.reduce((a, b) => a * b); break;
        case '/': operands[0] = operands.reduce((a, b) => a / b); break;
        case '-': operands[0] = operands.reduce((a, b) => a - b); break;
    }
}