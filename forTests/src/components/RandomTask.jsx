
import React, { useState } from "react";
import axios from "axios";
import "../AllTasks.scss";



export default function RandomTask() {


  const [task, setTask] = useState()

  // let id = Math.floor(Math.random() * 200)
  // { params: { answer: 42 } }
  useState(() => {
    axios
      .get('./dbv6.json')
      .then((res) => setTask(res.data))
      .catch(err => console.log(err))
  
  }, []);

  // console.log(useState([Math.floor(Math.random() * 200)]))

  // console.log([Math.floor(Math.random()*200)])



let id = 4

  return (

    <div className="App">
      <div className=""><p>maybe random</p>

      </div>

      <div className="title-text"><strong>RANDOM TASK</strong>
        (<i>JSON file using react API call(fetch, axios)</i>)
      </div>

      {task && task?.map(({ task, id }) => (


        <div key={`$[id].4`} className="list-row">

          <div> {task} </div>
          {/* <strong>{task}</strong> */}
        </div>
      ))}
    </div>
  );
}


// function randomQuote() {
//   let random = quotes[Math.floor(Math.random() * quotes.length)];
//   quotation.innerText = `“${random.quote}.”`;
//   source.innerText = random.source;
// }

// randomQuote();

// document.querySelector("button").addEventListener('click', randomQuote)
