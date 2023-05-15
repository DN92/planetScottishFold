const Sequelize = require('sequelize')
const db = require('../db/dbSetup')

async function getTableNamesFromDB() {

  const rawTables = await db.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_type = 'BASE TABLE';
  `)

  const tableNames = rawTables.length ? rawTables[0].map(tableObj => (
    tableObj.table_name
  )) : []

  console.log(tableNames)

  return tableNames
}

async function getAllRowsFromTablesArray(tablesArray) {
  console.log(tablesArray)
  const rowsByTable = await Promise.all(tablesArray.map(async tableName => {
    const model = db.model(tableName);
    rows = await model.findAll();
    return rows;
  }))
  console.log(rowsByTable);
  return rowsByTable;
}

getTableNamesFromDB();
console.log('------')
getAllRowsFromTablesArray(getTableNamesFromDB())