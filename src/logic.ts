
export let operands: number[] = [];
export let operatorList: string[] = ["+", "-", "*", "/", "=", "clr"];

export const setOperands = (operand: number) => {
    operands.push(operand);
    console.log(operands);
}

export const doOperation = (operator: string) => {
    switch (operator) {
        case '+': console.log(`${operator}`); break;
        case '*': console.log(`${operator}`); break;
        case '/': console.log(`${operator}`); break;
        case '-': console.log(`${operator}`); break;
        default: console.log(`${operator} not a valid operator!`);
    }
}