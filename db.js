const { Pool } = require('pg')

const pool = new Pool({
  user: 'pnartov',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres',
})

module.exports = pool
