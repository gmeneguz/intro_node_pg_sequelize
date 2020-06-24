const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'aula',
  password: '2105',
  port: 5432,
})

module.exports = client
