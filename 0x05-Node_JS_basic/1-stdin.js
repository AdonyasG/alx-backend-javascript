// node script
const read = require('readline');

const res = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
res.on('line', (input) => {
  if (input) {
    console.log(`Your name is: ${input}`);
  }
  res.close();
});
res.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});
