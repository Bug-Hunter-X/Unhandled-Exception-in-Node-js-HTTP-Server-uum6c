const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/error') {
      // Simulate an unexpected error
      throw new Error('Something went wrong!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});