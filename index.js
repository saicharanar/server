const { fileHandler } = require('./src/fileHandler');
const { injectCookies } = require('./src/injectCookies');
const { injectSessions } = require('./src/injectSessions');
const { startServer } = require('./src/server');

module.exports = { startServer, fileHandler, injectCookies, injectSessions };
