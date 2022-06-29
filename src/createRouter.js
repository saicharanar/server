const { parseSearchParams } = require('./parseSearchParams');

const createRouter = (handlers) => {
  const allHandlers = [parseSearchParams, ...handlers];
  return (request, response) => {
    for (const handler of allHandlers) {
      if (handler(request, response)) {
        return true;
      }
    }

    return false;
  };
};
exports.createRouter = createRouter;
