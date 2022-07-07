# Installation

`npm install https://github.com/saicharanar/server`

# Usage

```js
// Import startServer .
const { startServer } = require('server');

// Pass a port and the handlers as array to startServer .

startServer(port, [handler1, handler2 ...]);

// Voila! your server is ready to serve.
```

# Handler's Contract

```js
// Handlers take three arguments the last one being optional
handler(request, response, next);

/*
next() => is a function that calls the next handler in the chain
use next() only if your handler cannot handle the current request and you
want to pass it to the next handler.  
*/
```

# Available Handlers

```

const { fileHandler } = require('server');
// fileHandler takes config of `fileOptions: {defaultFile :'fileForSlash', path: 'path of the folder you want to serve from}`
// fileHandler(config);

const { injectSessions } = require('server');
// Injects the session related to cookies in request.
injectSessions() // pass ongoing sessions.

const { injectCookies } = require('server');
// Reads and injects to cookies in request.

```
