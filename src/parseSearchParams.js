const parseSearchParams = (request, response) => {
  const searchParams = request.url.searchParams.entries();

  const queryParams = {};
  for (const [key, value] of searchParams) {
    queryParams[key] = value;
  }

  request.queryParams = queryParams;
  return false;
};

module.exports = { parseSearchParams };
