const createRouter = (handlers) => {
  return (request, response) => {
    for (const handler of handlers) {
      if (handler(request, response)) {
        return true;
      }
    }

    return false;
  };
};
exports.createRouter = createRouter;