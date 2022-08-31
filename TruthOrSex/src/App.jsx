import React from 'react';
import axios from 'axios';
// mongodb+srv://Butmocks:zTGuBE01@cluster0.nyfyz7n.mongodb.net/test
import './App.css';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }
  // https://data.mongodb-api.com/app/data-kdhdv/endpoint/data/v1
  // https://data.mongodb-api.com/app/data-kdhdv/endpoint
  // https://europe-west1.gcp.data.mongodb-api.com/app/application-0-gzmgy/endpoint
  // https://realm.mongodb.com/api/client/v2.0/app/data-kdhdv/graphql

  fetchAdvice = () => {
    axios
      .get('https://crudcrud.com/api/9f4758da4019400f9a974b9192052db1')
      .then(response => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Завдання</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
