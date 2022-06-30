const parseQueryParams = (request, response, next) => {
  const searchParams = request.url.searchParams.entries();

  const queryParams = {};
  for (const [key, value] of searchParams) {
    queryParams[key] = value;
  }

  request.queryParams = queryParams;
  next();
};

module.exports = { parseQueryParams };
