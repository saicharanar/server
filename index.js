const { fileHandler } = require('./src/fileHandler');
const { injectCookies } = require('./src/injectCookies');
const { injectSessions } = require('./src/injectSessions');
const { parseBodyParams } = require('./src/parseBodyParams');
const { startServer } = require('./src/server');

module.exports = {
  startServer,
  fileHandler,
  injectCookies,
  parseBodyParams,
  injectSessions,
};
