import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="timer">
        <span>00</span>:<span>00</span>:<span>00</span>
        <div className="names"><h6>Hour </h6><h6>Minute </h6><h6>Second </h6></div>
      </div>
    );
  }
}

export default App;
