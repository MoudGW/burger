//required dependencies
var mysql = require('mysql');
// Create the MySQL connection object
var con;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	con= mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	})
};

// Make the connection to MySQL
con.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error'+ err.stack);
    return;
  }
  console.log('Connected to MySQL database as id');
});
// Export the database connection
module.exports = con;