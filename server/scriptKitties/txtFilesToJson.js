const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const readdirAsync = promisify(fs.readdir);
const unlinkAsync = promisify(fs.unlink);

async function convertTxtToJson(dirPath) {
  try {
    const files = await readdirAsync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);

      if (path.extname(filePath).toLowerCase() === '.txt') {
        const fileContents = await readFileAsync(filePath, 'utf8');

        try {
          const jsonData = JSON.parse(fileContents);
          const jsonFilePath = path.join(dirPath, `${path.parse(filePath).name}.json`);
          await writeFileAsync(jsonFilePath, JSON.stringify(jsonData, null, 2));
          await unlinkAsync(filePath);
          console.log(`Successfully converted ${filePath} to ${jsonFilePath} and deleted original file`);
        } catch (err) {
          console.error(`File ${filePath} contains invalid JSON.`);
        }
      }
    }

    console.log('Conversion complete.');
  } catch (err) {
    console.error(`Error reading directory ${dirPath}: ${err}`);
  }
}

// Parse CLI arguments

const args = process.argv.slice(2);
const tIndex = args.findIndex((arg) => arg === '-t');

if (tIndex === -1 || tIndex + 1 >= args.length) {
  console.error('Please specify a target directory using the -t flag.');
  process.exit(1);
}

const dirPath = args[tIndex + 1];

convertTxtToJson(dirPath);
