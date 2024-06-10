import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getResultOfExpression = (firstValue, operator, secondValue) => {
  const operation = operations[operator];
  if (!operation) {
    throw new Error(`Unsupported operator: ${operator}`);
  }
  return operation(firstValue, secondValue);
};

const generateRounds = () => {
  const firstNumber = randoMumbers(1, 25);
  const secondNumber = randoMumbers(1, 25);
  const operator = operators[randoMumbers(0, operators.length - 1)];

  return [
    `${firstNumber} ${operator} ${secondNumber}`,
    getResultOfExpression(firstNumber, operator, secondNumber).toString()
  ];
};

export default () => {
  startGame(gameDescription, generateRounds);
};
