// node script
const read = require('readline');

process.stdin.setEncoding('utf8');

const res = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
res.on('line', (input) => {
  if (input) {
    process.stdout.write(`Your name is: ${input}\n`);
  }
  res.close();
});
res.on('close', () => {
  if (!(process.stdin.isTTY)) {
    console.log('This important software is now closing');
  }
});
