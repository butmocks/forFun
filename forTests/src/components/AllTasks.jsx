import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AllTasks.scss";



export default function AllTasks() {

  const [tasks, setTask] = useState([]);
  useEffect(() => {

    axios
      .get("./dbv6.json")
      .then((res) => setTask(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">

      <div className="title-text"><strong>TASKS</strong> (<i>JSON file using react API call(fetch, axios)</i>)</div>
      {tasks &&
        tasks?.map(({ task, id }) => (
          <div key={id} className="list-row">
            <strong>{task}</strong>
          </div>
        ))}
    </div>
  );
}