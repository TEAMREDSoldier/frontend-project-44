import startGame from '../index.js';
import randoMumbers from '../randoMumbers.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gameDescription = 'Find the greatest common divisor of given numbers';

const generateRounds = () => {
  const firstNumber = randoMumbers();
  const secondNumber = randoMumbers();

  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatestCommonDivisor.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRounds);
};
