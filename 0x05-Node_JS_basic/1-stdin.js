process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    const res = name.toString().trim();
    console.log(`Your name is: ${res}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

console.log('Welcome to Holberton School, what is your name?');
