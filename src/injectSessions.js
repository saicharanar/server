const injectSessions = () => {
  const sessions = {};
  return (req, res, next) => {
    req.sessions = sessions;

    const sessionId = req.cookies.sessionId;
    if (sessionId) {
      req.session = sessions[sessionId];
    } else {
      req.session = null;
    }
    next();
  };
};

module.exports = { injectSessions };
