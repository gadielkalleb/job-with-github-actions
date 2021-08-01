const fs = require("fs");
const csv = require('csv-parser')

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

module.exports = parseCSV
