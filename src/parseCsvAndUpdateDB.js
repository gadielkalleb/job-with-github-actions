const { resolvePath, parseCSV } = require('./utils')

const parseCsvAndUpdateDB = async () => {

  const airports = await parseCSV(
    resolvePath("raw/airports.csv")
  );

};

parseCsvAndUpdateDB();
