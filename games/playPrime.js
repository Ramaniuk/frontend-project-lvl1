import { greeting, playGame, defineNumbers } from "../src/index.js";

const gameRules = () => {
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);
};

const defineQuestionForPrime = () => {
  let num = defineNumbers(101);
  console.log(`Question: ${num}`);
  return num;
};

const correctAnswerForPrime = (num) => {
  if (num !== 2 && num % 2 === 0) {
    return "no";
  } else {
    return "yes";
  }
};

const playOneRound = () => {
  const questionForRound = defineQuestionForPrime();
  const correctAnswerForRound = correctAnswerForPrime(questionForRound);
  // console.log("0la", questionForRound, correctAnswerForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playPrime = () => {
  let name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
