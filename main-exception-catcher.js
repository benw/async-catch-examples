
var http = require('http');
var handle = require('./app').handle;

    http.createServer(function (req, res) {
      // Install an exception catcher for this request.
      process.exceptionCatcher = function (e) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end('500 Internal Server Error\n\n' + e.stack + '\n');
      };
      // Application code that might throw.
      handle(req, res);
      // Subsequent exceptions should not
      // interfere with this request.
      delete process.exceptionCatcher;
    }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
