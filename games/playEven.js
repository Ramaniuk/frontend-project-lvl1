#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from "../src/index.js";

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const defineQuestionForEven = () => {
  const defineNumbersForEven = defineNumbers(1001);
  console.log(`Question: ${defineNumbersForEven}`);
  return defineNumbersForEven;
};

const correctAnswerForEven = (number) => {
  if (number % 2 === 0) {
    return "yes";
  } else {
    return "no";
  }
};

const playOneRoundForEven = () => {
  const questionForRound = defineQuestionForEven();
  const correctAnswerForRound = correctAnswerForEven(questionForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playEven = () => {
  let name = greeting();
  gameRules();

  playGame(playOneRoundForEven, name);
};
