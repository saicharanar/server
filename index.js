const { createRouter } = require('./src/createRouter');
const { fileHandler } = require('./src/fileHandler');
const { injectCookies } = require('./src/injectCookies');
const { injectSessions } = require('./src/injectSessions');
const { parseBodyParams } = require('./src/parseBodyParams');
const { startServer } = require('./src/server');
const { logRequest } = require('./src/logRequest');

module.exports = {
  createRouter,
  logRequest,
  startServer,
  fileHandler,
  injectCookies,
  parseBodyParams,
  injectSessions,
};
