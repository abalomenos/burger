
// For MySQL Connection info.
require('dotenv').config();

// Set up MySQL connection.
var mysql = require("mysql");

// File to process .env for MySQL Connection Info.
var keys = require("./keys.js");

// MySQL Database Connection.
var connection = mysql.createConnection({
  host: keys.mysql.host,
  port: keys.mysql.port,
  user: keys.mysql.user,
  password: keys.mysql.password,
  database: keys.mysql.database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
