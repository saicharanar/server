const { parseBodyParams } = require('./parseBodyParams');
const { parseQueryParams } = require('./parseQueryParams');

const createNext = (handlers) => {
  let index = -1;
  const nextHandler = (req, res) => {
    index++;
    const currentHandler = handlers[index];
    if (currentHandler) {
      currentHandler(req, res, () => nextHandler(req, res));
    }
  };

  return nextHandler;
};

const createRouter = (handlers) => {
  const allHandlers = [parseBodyParams, parseQueryParams, ...handlers];
  return (req, res) => {
    const next = createNext(allHandlers);
    next(req, res);
  };
};

exports.createRouter = createRouter;
