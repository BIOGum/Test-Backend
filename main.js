const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtskirt"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  con.query("SELECT * FROM tskirt", function (err, result, fields) {
    res.send(result)
  });
});

app.get('/:skirt', (req, res) => {
  var skirts = req.params.skirt
  con.query("SELECT * FROM tskirt ORDER BY " +(skirts), function (err, result, fields) {
    res.send(result)
  });
});

app.get('/:skirt/:id', (req, res) => {
  var skirts = req.params.skirt
  var gen = req.params.id
  con.query("SELECT * FROM tskirt WHERE "+(skirts)+" = " + mysql.escape(gen), function (err, result, fields) {
    res.send(result)
  });
})

app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});