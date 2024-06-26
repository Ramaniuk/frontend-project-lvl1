#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from '../src/index.js';

const gameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const defineQuestionForGcd = () => {
  const numOne = defineNumbers(101);
  const numTwo = defineNumbers(101);
  const question = `${numOne} ${numTwo}`;
  console.log(`Question: ${question}`);
  return [numOne, numTwo];
};

//  algorithm euclid
const correctAnswer = (array) => {
  let a = array[0];
  let b = array[1];
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const playOneRound = () => {
  const questionForRound = defineQuestionForGcd();
  const correctAnswerForRound = correctAnswer(questionForRound);
  return [questionForRound, correctAnswerForRound];
};

const playGcd = () => {
  const name = greeting();
  gameRules();

  playGame(playOneRound, name);
};

export default playGcd;
