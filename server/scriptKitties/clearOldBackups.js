const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(30);

console.log('PROCESS ARG V::: ', argv)

function deleteOldestFiles(dirPath) {
  const files = readdirSync('./server/db/backups') ?? []

  if(files.length < 101) return

  const sortedFilenames = files.sort((a, b) => {
    const [, day1, month1, year1, hour1, minute1] = a.match(/^database_(\d{2})-(\d{2})-(\d{4})-(\d{2})-(\d{2})\.csv$/);
    const [, day2, month2, year2, hour2, minute2] = b.match(/^database_(\d{2})-(\d{2})-(\d{4})-(\d{2})-(\d{2})\.csv$/);

    const date1 = new Date(`${year1}-${month1}-${day1}T${hour1}:${minute1}`);
    const date2 = new Date(`${year2}-${month2}-${day2}T${hour2}:${minute2}`);

    return date1 - date2;
  });

  const numFilesToDelete = sortedFilenames.length - 100;
  if (numFilesToDelete > 0) {
    for (let i = 0; i < numFilesToDelete; i++) {
      const filePath = path.join(dirPath, sortedFilenames[i]);
      fs.unlinkSync(filePath);
    }
  }
}
