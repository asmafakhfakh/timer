import React, { Component } from 'react';
import './App.css';

const start = 3661000; //in milliseconds

function convert(ms){
  let s = Math.floor(ms/1000);
  let sec= s%60;
  if (sec<10) {sec="0"+sec};
  let min= Math.floor((s%3600)/60);
  if (min<10) {min="0"+min};
  let h= Math.floor(s/3600);
  if (h<10) {h="0"+h};
  return {hours:h,minutes:min,seconds:sec}
}

const Time = (props) => 
  <div>
    <span>{props.display.hours}</span>:
    <span>{props.display.minutes}</span>:
    <span>{props.display.seconds}</span>
  </div>


class App extends Component {
  render() {
    return (
      <div className="timer">
        <Time  display={convert(start)} />
        <div className="names"><h6>Hour </h6><h6>Minute </h6><h6>Second </h6></div>
        <button onclick="startconting">Start</button>
        <button onclick="resetcounting">Reset</button>
      </div>
    );
  }
}

export default App;
