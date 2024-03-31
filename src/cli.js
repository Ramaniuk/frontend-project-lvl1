import readlineSync from 'readline-sync';

// greeting
export const greeting = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};
