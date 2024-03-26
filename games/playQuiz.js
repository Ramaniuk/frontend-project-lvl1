import readlineSync from "readline-sync";
import { greeting, playGame } from "../src/index.js";

const gameRules = () => {
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
};

const defineQuestionForQuiz = () => {
  let number = Math.floor(Math.random() * 1000);
  console.log(`Question: ${number}`);
  return number;
};

const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return "yes";
  } else {
    return "no";
  }
};

const playOneRound = () => {
  const questionForRound = defineQuestionForQuiz();
  const correctAnswerForRound = correctAnswer(questionForRound);
  // console.log("0la", questionForRound, correctAnswerForRound);
  return [questionForRound, correctAnswerForRound];
};

export const playQuiz = () => {
  let name = greeting();
  gameRules();

  playGame(playOneRound, name);
};
