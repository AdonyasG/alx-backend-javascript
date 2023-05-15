#!/usr/bin/node
const process = require('process');
const read = require('readline');

const res = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  res.question(question, (answer) => {
    res.write(`Your name is: ${answer}\n`);
    res.on('close', () => {
      console.log('This important software is now closing');
      process.exit(0);
    });
  });
}

ask('Welcome to Holberton School, what is your name?\n');
