const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'book_details',
  password: 'postgres',
  port: 5433,
});

module.exports = pool;


/*const pgCon = require('pg')
const PGUSER = 'USER'
const PGDATABASE = 'localhost'
let config = {
    user: PGUSER,
    database: PGDATABASE,
    max: 10,
    idleTimeoutMillis: 30000
}

let connectionPool = new pgCon.Pool(config);

module.exports = connectionPool;


module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5, // max: maximum number of connection in pool
      min: 0, // min: minimum number of connection in pool
      acquire: 30000, // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000 // idle: maximum time, in milliseconds, that a connection can be idle before being released
    }
  };*/