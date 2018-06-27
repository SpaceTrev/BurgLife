const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgersDB"
    })
  }


connection.connect((err)=> {
    if (err) {console.log("you f$@*ed up m8: " + err.stack); return;}
    console.log("WE IN IT, CONNECTED AS ID" + connection.threadId);
})
module.exports = connection;