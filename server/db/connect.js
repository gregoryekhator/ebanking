const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Ge3318JJ',
  host: 'localhost',
  port: 5432,
  database: 'bank_account'
});

module.exports = { pool };