const path = require("path");

const resolvePath = (pathname) => path.resolve(__dirname, '..', '..', 'bucket', pathname);

module.exports = resolvePath
