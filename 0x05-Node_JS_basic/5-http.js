const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(1245, () => {
  // console.log('Server is running on port 1245');
});
module.exports = app;
