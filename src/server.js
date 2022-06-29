const http = require('http');
const { URL } = require('url');

const startServer = (port, handler) => {
  const server = http.createServer((request, response) => {
    const baseUrl = `http://${request.headers.host}`;
    request.url = new URL(request.url, baseUrl);
    console.log(request.method, request.url.pathname);
    handler(request, response);
  });

  server.listen(port, () => {
    console.log(`Server Bound to ${server.address().port}`);
  });
};

const notFoundHandler = (request, response) => {
  response.statusCode = 404;
  response.end('Not found');
  return true;
};

startServer(9090, notFoundHandler);
