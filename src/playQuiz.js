import readlineSync from "readline-sync";
import { greeting } from "./greeting.js";

export const playQuiz = () => {
  const name = greeting();
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  let count = 3;
  while (count > 0) {
    const number = readlineSync.question("Question: ");
    const answer = readlineSync.question("Your answer: ");
    if (
      (number % 2 === 0 && answer === "yes") ||
      (number % 2 !== 0 && answer === "no")
    ) {
      console.log("Correct!");
      count--;
    } else {
      count--;
    }
  }
  console.log(`Congratulations, ${name}`);
};
