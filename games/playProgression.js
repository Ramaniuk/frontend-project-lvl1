#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from '../src/index.js';

const gameRules = () => {
  console.log(`What number is missing in the progression?`);
};

const defineArrayForProgression = () => {
  const arrayLength = defineNumbers(5, 11);
  const firstNumber = defineNumbers(0, 101);
  const progresStep = defineNumbers(1, 6);
  const arrayBlankIndex = defineNumbers(1, arrayLength);
  // console.log(arrayLength, firstNumber, progresStep, arrayBlankIndex);
  let arr = [firstNumber];
  let numberToAdd = firstNumber;
  for (let i = 1; i < arrayLength; i++) {
    numberToAdd += progresStep;
    if (i !== arrayBlankIndex) {
      arr.push(numberToAdd);
    } else {
      arr.push('..');
    }
  }
  console.log(`Question: ${arr.join(' ')}`);
  return arr;
};

const correctAnswerForProgression = (array) => {
  const arrayBlankIndex = array.indexOf('..');
  const missingNum = array[arrayBlankIndex + 1]
    ? (array[arrayBlankIndex + 1] + array[arrayBlankIndex - 1]) / 2
    : array[arrayBlankIndex - 1] +
      (array[arrayBlankIndex - 1] - array[arrayBlankIndex - 2]);
  return missingNum;
};

const playOneRound = () => {
  const questionForRound = defineArrayForProgression();
  const correctAnswerForRound = correctAnswerForProgression(questionForRound);
  // console.log("0la", questionForRound, correctAnswerForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playProgression = () => {
  const name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
