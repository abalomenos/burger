
// For MySQL Local Connection info.
require('dotenv').config();

// File to process .env for MySQL Local Connection Info.
var keys = require("./keys.js");

// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// MySQL Database Connection.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {  
  connection = mysql.createConnection({
    host: keys.mysql.host,
    port: keys.mysql.port,
    user: keys.mysql.user,
    password: keys.mysql.password,
    database: keys.mysql.database
  });
}

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
