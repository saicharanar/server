const { URL } = require('url');

const injectUrl = (req, res, next) => {
  const baseUrl = `http://${req.headers.host}`;
  req.url = new URL(req.url, baseUrl);
  next();
};

module.exports = { injectUrl };
