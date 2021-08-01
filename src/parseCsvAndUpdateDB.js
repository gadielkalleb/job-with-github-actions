const { resolvePath, parseCSV } = require('./utils')

const parseCsvAndUpdateDB = async () => {
  const file = process?.argv[2] ?? throwError('invalid argument file')

  const airports = await parseCSV(
    resolvePath(file)
  );

};

parseCsvAndUpdateDB();
