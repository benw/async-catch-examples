
var http = require('http');
var handle = require('./app').handle;

http.createServer(function (req, res) {
  try {
    // Application code that might throw.
    handle(req, res);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end('500 Internal Server Error\n\n' + e.stack + '\n');
  }
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
