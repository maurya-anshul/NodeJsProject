const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    database: "nodeJs",
    user: "root",
    password: "9948"
})

module.exports = pool.promise();