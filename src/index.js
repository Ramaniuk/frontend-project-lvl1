import readlineSync from 'readline-sync';

// greeting
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const defineNumbers = (end, start = 0) => {
  // let number = Math.floor(Math.random() * num);
  const number = Math.floor(Math.random() * (end - start)) + start;
  return number;
};

// get response from Player
const playerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const displayResults = (answer, correctAnswer, name) => {
  const playerAnswerForRound = Number(answer) ? Number(answer) : answer;
  if (playerAnswerForRound === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `${playerAnswerForRound} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
  );
  return false;
};

// cycle with questions and answers
export const playGame = (playOneRound, name) => {
  let count = 3;
  let correctAnswersForGame = 0;

  while (count > 0) {
    const dataForOneRound = playOneRound();
    const getAnswerFromPlayer = playerAnswer();

    const resultForRound = displayResults(
      getAnswerFromPlayer,
      dataForOneRound[1],
      name,
    );

    if (resultForRound === true) {
      count -= 1;
      correctAnswersForGame += 1;
    } else {
      count = 0;
    }
  }
  if (correctAnswersForGame === 3) console.log(`Congratulations, ${name}!`);
};
