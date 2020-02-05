const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpasswordhere",
    database: "ujianbackend",
    port: "3306"
});