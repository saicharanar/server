const http = require('http');
const { URL } = require('url');
const { createRouter } = require('./createRouter');

const runServer = (port, router) => {
  const server = http.createServer((request, response) => {
    const baseUrl = `http://${request.headers.host}`;
    request.url = new URL(request.url, baseUrl);
    console.log(request.method, request.url.pathname);
    router(request, response);
  });

  server.listen(port, () => {
    console.log(`Server Bound to ${server.address().port}`);
  });
};

const asyncHandler = (req, res, next) => {
  const pathname = req.url.pathname;
  if (pathname === '/time') {
    setTimeout(() => {
      res.end('time');
    }, 5000);
    return;
  }
  next();
};

const notFoundHandler = (req, res) => {
  res.end('not found');
};

const startServer = (port, ...handlers) => {
  const router = createRouter(handlers);
  runServer(port, router);
};

startServer(8000, asyncHandler, notFoundHandler);

module.exports = { startServer };
