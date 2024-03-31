#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from '../src/index.js';

const gameRules = () => {
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
};

const defineQuestionForPrime = () => {
  const num = defineNumbers(101);
  console.log(`Question: ${num}`);
  return num;
};

const correctAnswerForPrime = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i = i + 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playOneRound = () => {
  const questionForRound = defineQuestionForPrime();
  const correctAnswerForRound = correctAnswerForPrime(questionForRound);
  // console.log("0la", questionForRound, correctAnswerForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playPrime = () => {
  const name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
