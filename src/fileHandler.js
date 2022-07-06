const fs = require('fs');
const mime = require('mime-types');
const path = require('path');

const fileHandler = (config) => {
  const {
    fileOptions: { defaultFile, path: filesPath },
  } = config;

  return (request, response, next) => {
    let { pathname: fileName } = request.url;
    if (fileName === '/') {
      fileName = defaultFile;
    }

    const file = path.join(filesPath, fileName);
    const contentType = mime.lookup(file);

    fs.readFile(file, (err, data) => {
      if (err) {
        next();
      }

      response.setHeader('Content-type', contentType);
      response.write(data);
      response.end();
    });
  };
};

module.exports = { fileHandler };
