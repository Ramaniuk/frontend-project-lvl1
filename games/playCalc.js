import { greeting, playGame } from "../src/index.js";

const gameRules = () => {
  console.log(`What is the result of the expression?`);
};

const defineNumbers = () => {
  let number = Math.floor(Math.random() * 100);
  return number;
};

const defineSign = () => {
  let sign = ["+", "-", "*"];
  let numForSign = Math.floor(Math.random() * 3);
  let chosenSign = sign[numForSign];
  return chosenSign;
};

const defineQuestionForCalc = () => {
  let numOne = defineNumbers();
  let numTwo = defineNumbers();
  let sign = defineSign();
  const question = `${numOne} ${sign} ${numTwo}`;
  console.log(`Question: ${question}`);
  return [numOne, numTwo, sign];
};

const correctAnswer = (array) => {
  let result = 0;
  switch (array[2]) {
    case "+":
      result = array[0] + array[1];
      break;
    case "-":
      result = array[0] - array[1];
      break;
    case "*":
      result = array[0] * array[1];
      break;
  }
  return result;
};

const playOneRound = () => {
  const questionForRound = defineQuestionForCalc();
  const correctAnswerForRound = correctAnswer(questionForRound);
  // console.log("0la", questionForRound, correctAnswerForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playCalc = () => {
  let name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
