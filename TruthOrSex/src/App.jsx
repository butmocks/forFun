import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }
  // https://data.mongodb-api.com/app/data-kdhdv/endpoint/data/v1
  // https://data.mongodb-api.com/app/data-kdhdv/endpoint

  // https://realm.mongodb.com/api/client/v2.0/app/data-kdhdv/graphql

  fetchAdvice = () => {
    axios
      .get('https://data.mongodb-api.com/app/data-kdhdv/endpoint')
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
