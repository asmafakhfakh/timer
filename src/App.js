import React, { Component } from 'react';
import './App.css';

const start = 156000; //in milliseconds

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

var on=false;


class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { now:start }
    setInterval(() => {
      //this.state.now ++
      //this.setState({now: this.state.now -1});
      if ((on===true)&&(this.state.now>0)) {
        this.setState({now: this.state.now-1000});
      }
    }, 1000);
  }


  

  render() { 
    return ( <div>
      <span>{convert(this.state.now).hours}</span>:
      <span>{convert(this.state.now).minutes}</span>:
      <span>{convert(this.state.now).seconds}</span>
    </div> );
  }
}
 




// const Time = (props) => 
//   <div>
//     <span>{props.display.hours}</span>:
//     <span>{props.display.minutes}</span>:
//     <span>{props.display.seconds}</span>
//   </div>


class App extends Component {
  render() {
    return (
      <div className="timer">
        <Time />
        <div className="names"><h6>Hour </h6><h6>Minute </h6><h6>Second </h6></div>
        <button type="button" onClick={()=>on=!on} >Start/pause</button>
        <button type="button" onClick={()=>alert("on")} >Reset</button>
      </div>
    );
  }
}

export default App;
