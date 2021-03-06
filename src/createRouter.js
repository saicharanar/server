const { injectUrl } = require('./injectUrl');
const { parseQueryParams } = require('./parseQueryParams');

const createNext = (handlers) => {
  let index = -1;
  const callNextHandler = (req, res) => {
    index++;
    const currentHandler = handlers[index];
    if (currentHandler) {
      currentHandler(req, res, () => callNextHandler(req, res));
    }
  };
  return callNextHandler;
};

const createRouter = (handlers) => {
  const allHandlers = [injectUrl, parseQueryParams, ...handlers];
  return (req, res) => {
    const next = createNext(allHandlers);
    next(req, res);
  };
};

module.exports = { createRouter };
