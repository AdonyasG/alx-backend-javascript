process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    console.log(`Your name is: ${data.trim()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to Holberton School, what is your name?');
