let mysql = require('mysql');

/**
 * host: localhost // process.env.DB_HOST
 * user: root // process.env.DB_NAME
 * password : luckystrike // process.env.DB_PASSWORD
 * database : mutant_log // process.env.DB_DATABASE
 */

module.exports = mysql.createPool({
    connectionLimit: 5,
    host: '127.0.0.1',
    user: 'root',
    password: 'luckystrike',
    database: 'mutant_log'
});
