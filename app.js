var fs = require('fs');

exports.handle = handle;

function handle(req, res) {
  // Return the mtime of the requested file.
  fs.stat(req.url, function (err, stats) {
    res.setHeader("Content-Type", "text/plain");
    // Bug: If the file does not exist,
    // stats is undefined and stats.mtime will throw.
    res.end(req.url + ' modified ' + stats.mtime + '\n');
  });
}
