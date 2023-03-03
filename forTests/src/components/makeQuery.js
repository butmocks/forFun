



function newFunction() {
  const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('gamedb.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });

  db.serialize(() => {
    db.each(`SELECT *
    FROM whitegame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1)`,

      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.id + "\t" + row.task);
      });
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}
console.log(newFunction(1))