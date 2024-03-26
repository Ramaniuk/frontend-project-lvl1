import readlineSync from "readline-sync";
import { greeting } from "./greeting.js";

export const calc = () => {
  const name = greeting();
  console.log(`What is the result of the expression?`);

  let count = 3;

  while (count > 0) {
    let numOne = Math.floor(Math.random() * 100);
    let numTwo = Math.floor(Math.random() * 100);
    let sign = ["+", "-", "*"];
    let numForSign = Math.floor(Math.random() * 3);
    let chosenSign = sign[numForSign];

    const question = `${numOne} ${chosenSign} ${numTwo}`;
    console.log(`Question: ${question}`);

    const answer = readlineSync.question("Your answer: ");

    let result = 0;
    switch (chosenSign) {
      case "+":
        result = numOne + numTwo;
        break;
      case "-":
        result = numOne - numTwo;
        break;
      case "*":
        result = numOne * numTwo;
        break;
    }

    if (answer == result) {
      console.log("Correct!");
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}`
      );
      count = 0;
    }
    count--;
  }
};
