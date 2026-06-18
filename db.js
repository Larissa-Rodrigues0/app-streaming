const mysql = require('mysql2/promise');
const database = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'plataforma_streaming',
})

module.exports = database;