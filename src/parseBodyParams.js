const { parseParams } = require('./parseParams');

const isURLEncoded = (headers) => {
  return headers['content-type'] === 'application/x-www-form-urlencoded';
};

const parseBodyParams = (req, res, next) => {
  if (isURLEncoded(req.headers)) {
    let rawBody = '';
    req.on('data', (chunk) => {
      rawBody += chunk.toString();
    });

    req.on('end', () => {
      const params = new URLSearchParams(rawBody);
      const bodyParams = parseParams(params);
      req.bodyParams = bodyParams;
      next();
    });
  }
  next();
};

module.exports = { parseBodyParams };
