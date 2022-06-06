var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "dbtskirt"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE tskirt (gender VARCHAR(255), category VARCHAR(255), size VARCHAR(255), amount INT)";
    con.query(sql, function (err, result) {
        if (err) throw err
        console.log("Table created")
    });
});

