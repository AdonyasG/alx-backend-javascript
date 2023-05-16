const app = require('http');

const server = app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Holberton School!');
});

server.listen(1245, () => {
  // console.log('Server is running on port 1245');
});
