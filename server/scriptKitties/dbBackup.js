const Sequelize = require('sequelize')
const dbAndModelsObj = require('../db');
const { writeFile } = require('fs')

const db = dbAndModelsObj.db

function getCurrentDateTimeFormattedString() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const date = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  return `${date}-${month}-${year}-${hours}-${minutes}`;
}

async function getTableNamesFromDB() {

  function removeLastS(arr) {
    return arr.map(str => {
      if (str.charAt(str.length - 1) === 's') {
        return str.slice(0, -1);
      }
      return str;
    })
  }

  const rawTables = await db.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_type = 'BASE TABLE';
  `)

  const tableNames = rawTables.length ? rawTables[0].map(tableObj => (
    tableObj.table_name
  )) : []

  return removeLastS(tableNames)
}

async function getAllRowsFromTablesArray(cbf) {

  const tablesArray = await cbf()
  const rowsByTable = await Promise.all(tablesArray.map(async tableName => {
    const model = db.model(tableName);
    rows = await model.findAll();
    return rows;
  }))
  return rowsByTable;
}

async function backupDB(databaseGetterFunction, argForFunction) {
  const databaseData = await databaseGetterFunction(argForFunction);
  // console.log(databaseData)

  // Flatten the rows into a single array
  const allRows = databaseData.flat();

  // Get the column names from the first row
  const columnNames = Object.keys(allRows[0].dataValues);

  // Create a string of CSV headers
  const headerRow = columnNames.join(',');

  // Create a string of CSV rows
  const dataRows = allRows.map((row) =>
    columnNames.map((columnName) => row.get(columnName)).join(',')
  );

  // Combine the header row and data rows into a single string
  const csvString = `${headerRow}\n${dataRows.join('\n')}`;

  const dateAndTime = getCurrentDateTimeFormattedString();

  // Write the CSV string to a file
  console.log('CWD:: ', __dirname)
  writeFile(`server/db/backups/database_${dateAndTime}.csv`, csvString, (err) => {
    if (err) throw err;
    console.log('file successfully saved')
  });

}

backupDB(getAllRowsFromTablesArray, getTableNamesFromDB)
