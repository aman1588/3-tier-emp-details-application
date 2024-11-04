const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'aman',
  password: 'aman@123',
  database: 'employee_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database');
});

module.exports = connection;
