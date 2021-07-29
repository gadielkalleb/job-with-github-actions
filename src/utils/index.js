const fs = require("fs");
const path = require("path");
const https = require("https");

const resolvePath = (pathname) => path.resolve(__dirname, pathname);

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

const parseCSV = (pathname) => {
  const items = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(pathname)
      .pipe(csv({ 
        mapValues: ({ value }) => value.trim() 
      }))
      .on("data", (data) => { 
        if (!!data.iata_code) {
          items.push(data)
        }
      })
      .on("end", () => resolve(items))
      .on('error', error => reject(error))
  });
};

module.exports = {
  resolvePath,
  downloadFile,
  parseCSV
}