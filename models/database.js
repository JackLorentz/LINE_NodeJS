var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "jackLorentz",
    password: "jack843971",
    database: "Line_test"
});

console.log("MySQL server is connected !");

function DB(db){
    this.table = db.table;
    this.id = db.id;
}

module.exports = DB;

DB.prototype.findOneScore = (target, callback) => {
    var sql = "SELECT * FROM " + target.table + " WHERE userID = " + target.id;
    conn.query(sql, (err, result, fields)=>{
        if(err) throw err;
        console.log(result);
        callback(err, result);
    });
}