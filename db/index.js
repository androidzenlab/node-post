const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:postgres@localhost:5432/consumer complaints'

const pool = new Pool({
    connectionString: connectionString,
  })

  
  module.exports = {
    query: (text, params) => pool.query(text, params)
  }