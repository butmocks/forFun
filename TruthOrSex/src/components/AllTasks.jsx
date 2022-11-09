import React, { useState } from "react";
import axios from "axios";
import "../AllTasks.scss";

const URL = "http://localhost:3000/dbv7.json"

export default function AllTasks() {

  const [allTasks, setTask] = useState([]);
  useState(() => {

    axios
      .get(URL)
      .then((res) => setTask(res.data))
      .catch(err => console.log(err))
  }, []);
let random = allTasks &&
allTasks?.map(({ task, id }) => (
  <div key={id} className="list-row">
    <strong>{task}</strong>
  </div>
))
  return (
    <div className="App">

      <div className="title-text"><strong>TASKS</strong> (<i>JSON file using react API call(fetch, axios)</i>)</div>
      {random}
    </div>
  );
}