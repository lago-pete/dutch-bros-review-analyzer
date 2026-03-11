const { Pool } = require('pg')


const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

module.exports = pool;

//pool is essentially the middleware between Express and Postgres. It allows for connections to stay open rather then opening a new one each time someone requests something. 