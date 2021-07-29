const fs = require("fs");
const https = require("https");

const downloadFile = (origin, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination, { flags: "w" });
    https
      .get(origin, res => {
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        fs.unlink(destination);
        reject(err);
      });
  });
};

module.exports = downloadFile
