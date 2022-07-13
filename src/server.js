const http = require('http');

const runServer = (port, router) => {
  const server = http.createServer((request, response) => {
    router(request, response);
  });

  server.listen(port, () => {
    console.log(`Server Bound to ${server.address().port}`);
  });
};

const startServer = (port, router) => {
  runServer(port, router);
};

module.exports = { startServer };
