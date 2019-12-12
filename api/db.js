'use strict'

const mysql = require('mysql');

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST || "113.190.234.249",
    user: process.env.DB_USER || "root",
    password : process.env.DB_PASS|| "root@123",
    database : process.env.DB_NAME || "testprofile"
  }
);

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db
