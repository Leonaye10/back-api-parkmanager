const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Leomessi10+",
    database: "parkmanager"
  });
  
  connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Succes !!! Connection a la Base de données!");
  });

module.exports = connection;