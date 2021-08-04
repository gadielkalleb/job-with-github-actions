const fs = require("fs");
const csv = require('csv-parser')

const transformStream = require('./transformStream')

const filterByIataCode = transformStream(
  (chunk, _, done) => {
    if (chunk.iata_code) {
      return done(null, chunk)
    }
    done()
  }
)

const filterByClose = transformStream(
  (chunk, _, done) => {
    if (chunk.type !== 'closed') {
      return done(null, chunk)
    }
    done()
  }
)

const parseCSV = async (pathname) => {
  const items = [];

  try {

    const file = fs
      .createReadStream(pathname)
      .pipe(csv())
      .pipe(filterByIataCode)
      .pipe(filterByClose)

    for await (const chunk of file) {
      items.push(chunk)
    }

    return items
  } catch (error) {
    throw error
  }
};

module.exports = parseCSV
