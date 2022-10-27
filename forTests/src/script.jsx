const sqlite3 = require('sqlite3').verbose()
// / home / butmocks / Projects / forFun / forTests / public / dbv5 / db.sqlite3.sql
// open the database
let db = new sqlite3.Database('./dbv5/gamedb.db.sql', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT id as id,
                  task as task
           FROM whitegame`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.question);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});