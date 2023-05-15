// script that read stdin and and prints stdout
const readline = require('readline');

const res = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

res.question('Welcome to Holberton School, what is your name?\n', (input) => {
  console.log(`Your name is: ${input}`);
  console.log('This important software is now closing');
  res.close();
});
