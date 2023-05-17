const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send('This is the list of our students\n');
      res.send(error.message);
    });
});

app.listen(1245, () => {
  // console.log('Server is running on port 1245');
});

module.exports = app;
