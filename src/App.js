import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

const showDate = () => {
  const now = moment();
  const dublinDay = moment("2017-07-27");
  return dublinDay.diff(now, 'days').toString();
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Countdown to Dublin</h2>
        </div>
        <p className="App-intro">Days left: {showDate()}</p>
      </div>
    );
  }
}

export default App;
