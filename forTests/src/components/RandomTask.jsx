import React from "react"
import axios from "axios"
const URL = "./dbv7.json"
class RandomTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, isLoaded: false, allTasks: [] }
  }
  componentDidMount() {
    axios.get(URL / [10].id)
      .then(res => res.json(data)).then((result) => {
        this.setState({ isLoaded: true, allTasks: result })
      },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(), 
        // чтобы не перехватывать исключения из ошибок в самих компонентах. 
        (error) => {
          this.setState({ isLoaded: true, error })
        })
  }
  render() {
    const { error, isLoaded, allTasks } = this.state
    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Загрузка...</div>
    } else {
      return (<ul> allTasks.map{(allTasks =>
      (<li key={allTasks.id}> {allTasks.id} {allTasks.task} </li>
      ))} </ul>);
    }
  }
}
export default RandomTask