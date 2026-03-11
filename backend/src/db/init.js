const fs = require('fs')
const path = require('path')
const pool = require('./pool')


const run_schema = async () =>{
    try{
        const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')
        await pool.query(sql)
        console.log("Schema created successfully")
    }
    catch(error){
        console.error("Schema not created successfully", error)
    }       

}

run_schema();
