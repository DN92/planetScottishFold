const { readdirSync } = require('fs')

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


const files = readdirSync('./server/db/backups') ?? []


console.log(getLastChronologicalFilename(files))