#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from '../src/index.js';

const gameRules = () => {
  console.log(`What is the result of the expression?`);
};

const defineSign = () => {
  const sign = ['+', '-', '*'];
  const numForSign = Math.floor(Math.random() * 3);
  const chosenSign = sign[numForSign];
  return chosenSign;
};

const defineQuestionForCalc = () => {
  const numOne = defineNumbers(101);
  const numTwo = defineNumbers(101);
  const sign = defineSign();
  const question = `${numOne} ${sign} ${numTwo}`;
  console.log(`Question: ${question}`);
  return [numOne, numTwo, sign];
};

const correctAnswerForCalc = (array) => {
  let result = 0;
  switch (array[2]) {
    case '+':
      result = array[0] + array[1];
      break;
    case '-':
      result = array[0] - array[1];
      break;
    case '*':
      result = array[0] * array[1];
      break;
  }
  return result;
};

const playOneRoundForCalc = () => {
  const questionForRound = defineQuestionForCalc();
  const correctAnswerForRound = correctAnswerForCalc(questionForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playCalc = () => {
  const name = greeting();
  gameRules();

  playGame(playOneRoundForCalc, name);
};
