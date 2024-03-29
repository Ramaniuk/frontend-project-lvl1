import readlineSync from "readline-sync";

// greeting
export const greeting = () => {
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);
  return name;
};

export const defineNumbers = (end, start = 0) => {
  // let number = Math.floor(Math.random() * num);
  let number = Math.floor(Math.random() * (end - start)) + start;
  return number;
};

// get response from Player
const playerAnswer = () => {
  const answer = readlineSync.question("Your answer: ");
  return answer;
};

const displayResults = (playerAnswer, correctAnswer, name) => {
  if (playerAnswer == correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`
    );
    return false;
  }
};

// cycle with questions and answers
export const playGame = (playOneRound, name) => {
  let count = 3;

  while (count > 0) {
    let dataForOneRound = playOneRound();
    let getAnswerFromPlayer = playerAnswer();

    let resultForRound = displayResults(
      getAnswerFromPlayer,
      dataForOneRound[1],
      name
    );

    if (resultForRound === true) {
      count--;
    } else {
      count = 0;
    }
  }
};
