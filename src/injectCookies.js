const parseCookies = (cookieString) => {
  const cookies = {};
  if (!cookieString) {
    return cookies;
  }

  cookieString.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=');
    cookies[name.trim()] = value.trim();
  });

  return cookies;
};

const injectCookies = (req, res, next) => {
  const cookieString = req.headers.cookie;
  const cookies = parseCookies(cookieString);
  req.cookies = cookies;
  next();
};

module.exports = { injectCookies };
