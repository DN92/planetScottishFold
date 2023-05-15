const { readdirSync, createReadStream, existsSync, writeFileSync } = require('fs')
const fs = require('fs');
const csv = require('csv-parser');

function getCurrentDateTimeFormattedString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const date = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  return `${date}-${month}-${year}-${hours}-${minutes}`;
}

function getLastChronologicalFilename(filenames) {
  const regex = /^database_(\d{2})-(\d{2})-(\d{4})-(\d{2})-(\d{2}).csv$/;

  const sortedFilenames = filenames.sort((a, b) => {
    const [, day1, month1, year1, hour1, minute1] = a.match(regex);
    const [, day2, month2, year2, hour2, minute2] = b.match(regex);

    const date1 = new Date(`${year1}-${month1}-${day1}T${hour1}:${minute1}`);
    const date2 = new Date(`${year2}-${month2}-${day2}T${hour2}:${minute2}`);

    return date1 - date2;
  });

  const lastFilename = sortedFilenames[sortedFilenames.length - 1];

  return lastFilename;
}

function saveDBsnapshot(data) {

  const dateAndTime = getCurrentDateTimeFormattedString();
  const dirpath = 'server/db/snapShot'
  const filename = `shapshot_${dateAndTime}`
  const filePath = `${dirpath}/${filename}.txt`;

  // try {
    if (!existsSync(dirpath)) throw Error('bad path while attempting to save snapshot')
    
    writeFileSync(filePath, JSON.stringify(data));
    console.log(`Data written to file ${filePath}`);
    return true;
  // } catch (err) {
  //   console.error(`Error writing data to file ${filePath}: ${err.message}`);
  //   return false;
  // }
}


async function parseAndSaveCsvFile(filePath) {
  const results = [];
  
  if (!existsSync(filePath)) {
    console.error(`File '${filePath}' does not exist.`);
    return;
  }
  
  await new Promise((resolve, reject) => {
    createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log('completed parsing of CSV file');
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });

  saveDBsnapshot(results);
}

const pathToBackups = './server/db/backups'

const files = readdirSync(pathToBackups) ?? []

const mostRecentFile = getLastChronologicalFilename(files)

parseAndSaveCsvFile(`${pathToBackups}/${mostRecentFile}`)

