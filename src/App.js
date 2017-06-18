import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown';
import Leprechauns from './Leprechauns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://2.bp.blogspot.com/-6ol-7MpcVzw/UTKDous_9bI/AAAAAAAAGJE/WuxUyHfErGI/s1600/StPatricksDay4.gif" className="App-logo" alt="logo" />
          <h2>Countdown to Dublin</h2>
        </div>
        <Countdown/>
        <Leprechauns/>
      </div>
    );
  }
}

export default App;
