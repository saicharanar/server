const { parseParams } = require('./parseParams');

const parseQueryParams = (request, response, next) => {
  const searchParams = request.url.searchParams.entries();
  const queryParams = parseParams(searchParams);
  request.queryParams = queryParams;
  next();
};

module.exports = { parseQueryParams };
