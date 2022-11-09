import React from "react"
import RandomTask from "./components/RandomTask.jsx"
import AllTasks from "./components/AllTasks"
// import { Randomize } from "../src/Randomize/Randomize.jsx"
// import { RandomizeProps } from "../src/Randomize/Randomize"
// importScripts('./app.js')

function App() {
  return (
    <div className="App">
      <RandomTask />
      {/* <Randomize /> */}
      {/* <RandomizeProps /> */}
      <AllTasks />
    </div>
  )
}

export default App


// function getName(conn, userID) {
//   var c, result;
//   c = conn.cursor();
//   c.execute("SELECT name FROM userList WHERE userID = ?", [userID]);
//   result = c.fetchone();
//   if (result) {
//     return result[0];
//   }
// }

// function getName(conn, userID) {
//   var c, result;
//   c = conn.cursor();
//   c.execute("SELECT name FROM userList WHERE userID = ?", [userID]);
//   result = c.fetchone();

//   if (result) {
//     return result[0];
//   }
// }


