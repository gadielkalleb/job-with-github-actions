const { resolvePath, downloadFile } = require('./utils')

const donwloadAndRawCsv = async () => {

  await downloadFile(
    "https://ourairports.com/data/airports.csv",
    resolvePath("raw/airports.csv")
  );

};

donwloadAndRawCsv();
