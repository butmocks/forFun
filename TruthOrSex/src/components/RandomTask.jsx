import React from 'react';

import axios from 'axios';

export default class RandomTask extends React.Component {
  state = {
    taskArr: [
      
    ]
  }

  componentDidMount() {
    axios.get(`./dbv6.json`)
      .then(res => {
        const taskArr = res.data;
        this.setState({ taskArr });
      })
  }

  render() {
    return (
      <div >
        
              <ul>
        {this.state.taskArr.map(task => <li>{task.id}</li>)}
      </ul>
      </div>

    )
  }
}


// import React, { useState } from "react";
// import axios from "axios";
// import "../AllTasks.scss";

// // const base_url = './dbv6.json'
// // export default RandomTask = async () => {
// //   try {
// //     const response = await axios.get(`${base_url}/task?_id=5`)
// //     const tasks = response.data
// //     console.log(`GET: Here's the list of todos`, tasks)
// //     return tasks
// //   } catch (errors) {
// //     console.error(errors);
// //   }
  
// // }
// // RandomTask()

// // const base_url = './dbv6.json'
// export default function RandomTask() {


//   const [task, setTask] = useState()

//   // let id = Math.floor(Math.random() * 200)

//   useState(() => {
//     axios
//       .get('./dbv6.json')
//       .then((res) => setTask(res.data))
//       .catch(err => console.log(err))

//   }, []);

// // console.log(useState())
//   return (

//     <div className="App">
//       <div className=""><p>maybe random</p>
//         {[0].id}
//       </div>

//       <div className="title-text"><strong>RANDOM TASK</strong>
//         (<i>JSON file using react API call(fetch, axios)</i>)
//       </div>

//       {task && task?.map(({ task, id }) => (


//         <div key={ id} className="list-row">

//           <div> {task} </div>
//           {/* <strong>{task}</strong> */}
//         </div>
//       ))}
//     </div>
//   );
// }



// // // /comments?postId=1
// // // [
// // //   {
// // //     "postId": 1,
// // //     "id": 1,
// // //     "name": "id labore ex et quam laborum",
// // //     "email": "Eliseo@gardner.biz",
// // //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// // //   },
// // //   {
// // //     "postId": 1,
// // //     "id": 2,
// // //     "name": "quo vero reiciendis velit similique earum",
// // //     "email": "Jayne_Kuhic@sydney.com",
// // //     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
// // //   },
// // // ]




// // // function randomQuote() {
// // //   let random = quotes[Math.floor(Math.random() * quotes.length)];
// // //   quotation.innerText = `“${random.quote}.”`;
// // //   source.innerText = random.source;
// // // }

// // // randomQuote();

// // // document.querySelector("button").addEventListener('click', randomQuote)
