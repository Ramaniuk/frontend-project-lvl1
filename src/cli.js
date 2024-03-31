import readlineSync from 'readline-sync';

// greeting
const greeting = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greeting;
