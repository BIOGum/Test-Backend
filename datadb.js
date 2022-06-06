var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "dbtskirt"
});

gender = ["Man","Woman"];
category = ["Plain Color","Pattern","Figure"];
size = ["XS","S","M","L","XL"]; 

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tskirt (gender, category, size) VALUES ?";
    
var values = [
    ['Man', 'Plain Color', 'XS'],['Woman', 'Plain Color', 'XS'],
    ['Man', 'Pattern', 'XS'],['Woman', 'Pattern', 'XS'],
    ['Man', 'Figure', 'XS'],['Woman', 'Figure', 'XS'],
    ['Man', 'Plain Color', 'S'],['Woman', 'Plain Color', 'S'],
    ['Man', 'Pattern', 'S'],['Woman', 'Pattern', 'S'],
    ['Man', 'Figure', 'S'],['Woman', 'Figure', 'S'],
    ['Man', 'Plain Color', 'M'],['Woman', 'Plain Color', 'M'],
    ['Man', 'Pattern', 'M'],['Woman', 'Pattern', 'M'],
    ['Man', 'Figure', 'M'],['Woman', 'Figure', 'M'],
    ['Man', 'Plain Color', 'L'],['Woman', 'Plain Color', 'L'],
    ['Man', 'Pattern', 'L'],['Woman', 'Pattern', 'L'],
    ['Man', 'Figure', 'L'],['Woman', 'Figure', 'L'],
    ['Man', 'Plain Color', 'XL'],['Woman', 'Plain Color', 'XL'],
    ['Man', 'Pattern', 'XL'],['Woman', 'Pattern', 'XL'],
    ['Man', 'Figure', 'XL'],['Woman', 'Figure', 'XL'],
];
    con.query(sql, [values],function (err, result) {
        if (err) throw err;
        console.log("Data created");
    });
});

