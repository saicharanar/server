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

const startServer = (port, ...handlers) => {
  const router = createRouter(handlers);
  runServer(port, router);
};

module.exports = { startServer };
