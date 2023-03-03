const sqlite3 = require('sqlite3').verbose();



// import * as sqlite3 from 'sqlite3';
var a, cur, db;
db = sqlite3.connect("./gamedb.db");
cur = db.cursor();
a = cur.execute("SELECT task FROM whiteGame WHERE id = 2").fetchone()[0].toString();
console.log(a);


// import sqlite3 as sql

// function getTask(conn, id) {
//   var c, result;
//   c = conn.cursor();
//   c.execute(`SELECT task FROM whiteGame WHERE id = ?`, [id]);
//   result = c.fetchone();

//   if (result) {
//     return result[0]
//   }
// }
// getTask('gamedb.db', '5')
// console.log(getTask())