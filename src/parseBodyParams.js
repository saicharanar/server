const { parseParams } = require('./parseParams');

const parseBodyParams = (req, res, next) => {
  if (req.method !== 'POST') {
    next();
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const params = new URLSearchParams(body);
    const bodyParams = parseParams(params);
    req.bodyParams = bodyParams;
    next();
  });
};

module.exports = { parseBodyParams };
