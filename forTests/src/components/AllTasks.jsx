
import React, { useState } from "react";
import axios from "axios";
import "../AllTasks.scss";
// import { useEffect } from "react";


const AllTasks = () => {


  const [task, setTask] = useState([])

  // let id = Math.floor(Math.random() * 200)
  // { params: { answer: 42 } }
  useState(() => {
    axios
      .get('./dbv7.json')
      .then((res) => {
        const allTasks = res.data
        setTask(allTasks)
      })


  }, []);

  // console.log(useState([Math.floor(Math.random() * 200)]))

  // console.log([Math.floor(Math.random()*200)])





  return (

    <div className="App">

      <div className=""><p>maybe random</p>

      </div>

      <div className="title-text">
        (<i>JSON file using react API call(fetch, axios)</i>)
      </div>

      {task && task?.map(({ task, id }) => (


        <div key={id} className="list-row">

          <div> {task} </div>
          {/* <strong>{task}</strong> */}
        </div>
      ))}

    </div>
  );
}

export default AllTasks
// function randomQuote() {
//   let random = quotes[Math.floor(Math.random() * quotes.length)];
//   quotation.innerText = `“${random.quote}.”`;
//   source.innerText = random.source;
// }

// randomQuote();

// document.querySelector("button").addEventListener('click', randomQuote)
