#!/usr/bin/env node
import { greeting, playGame, defineNumbers } from "../src/index.js";

const gameRules = () => {
  console.log(`Find the greatest common divisor of given numbers.`);
};

const defineQuestionForGcd = () => {
  let numOne = defineNumbers(101);
  let numTwo = defineNumbers(101);
  const question = `${numOne} ${numTwo}`;
  console.log(`Question: ${question}`);
  return [numOne, numTwo];
};

const correctAnswer = (array) => {
  let a = array[0];
  let b = array[1];
  //algorithm euclid
  //большее число делим на меньшее. если делится без остатка, то меньшее число и есть НОД (следует выйти из цикла). если есть остаток, то большее число заменяем на остаток от деления.
  //переходим к пункту 1.
  while ((a != 0) & (b != 0)) {
    if (a > b) {
      //если а больше б, то а присваиваем а/б
      a = a % b;
    } else {
      b = b % a; //наоборот
    }
  }
  return a + b;
};

const playOneRound = () => {
  const questionForRound = defineQuestionForGcd();
  const correctAnswerForRound = correctAnswer(questionForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playGcd = () => {
  let name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
