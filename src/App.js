
import React, { Component } from 'react';
import Music from "./a.mp3"
import './App.css'

export class App extends Component {

  interval = "";


  constructor() {
    super();
    this.state = {
      timer: "0",
      count: "",

    }
  }


  componentDidMount() {
    setInterval(()=> this.settime(), 1000)
    this.interval = setInterval(
      () => this.same(),
      1000)
  }
  settime = () => {

    this.setState({

      timer: new Date().toLocaleTimeString("en-US",{hour12: false})
    })
  }
  changeTime = (e) => {
    const inputAlarm = e.target.value + ':00'
                                                  
      this.setState({
      count: inputAlarm
    })
  }

  same = () => {
    if (this.state.timer === this.state.count) {

      // alert('Hi! Good Moring')
       var play = document.getElementById("myAudio"); 
       play.play();
       console.log(" Hi! Good Moring ");


    }
  }


  render() {
    console.log(this.state.count);
    return (
      <div >

        <h1 className="h1">Alarm Clock  </h1>

        <h1 className="h2">Current Time <span>{this.state.timer}</span></h1>



        <input id="i1" type="time" onChange={this.changeTime} />

        <h2 className="h3">User Time<span>{this.state.count}</span></h2>
        <div>
          <audio ref="audio_tag" id="myAudio" src={Music} controls />
        </div>

      </div>
    )
  }
}

export default App