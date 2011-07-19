This project contains the examples given in the
[Async Exception Handling][proposal] proposal.

Files:

* app.js - A buggy http request handler that throws on file not found.

* main-try-catch.js - Run this with present-day node and
  visit [localhost] to see your process exit.

* main-exception-catcher.js - Run this with node compiled from the
  [candidate implementation][implementation] and visit [localhost] to
  see a 500 Internal Server Error and watch your process stay up.

[proposal]: https://github.com/joyent/node/wiki/Async-Exception-Handling
[implementation]: https://github.com/benw/node
[localhost]: http://localhost:1337/nonexistant
