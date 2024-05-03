const http = require('http');

/**
 * create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * The server should listen on the 1245 port
 * Displays Hello Holberton School! in the page body for any endpoint as plain text
 */
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
})
  .listen(port);

module.exports = app;
