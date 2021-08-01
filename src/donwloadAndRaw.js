const { resolvePath, downloadFile, throwError } = require('./utils')

const donwloadAndRaw = async () => {
  const url = process?.argv[2] ?? throwError('invalid argument url')
  const file = process?.argv[3] ?? throwError('invalid argument file')

  await downloadFile(url, resolvePath(file));
};

donwloadAndRaw();

  // await downloadFile(
  //   "https://ourairports.com/data/airports.csv",
  //   resolvePath('airports.csv')
  // );