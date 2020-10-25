//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ChanceMeter from "./ChanceMeter";
import MarginMeter from "./MarginMeter";
import ElectoralVotesMeter from "./ElectoralVotesMeter";

const client = new W3CWebSocket('ws://localhost:8080/pointer-web-socket');

class App extends Component {

  constructor() {
    super();
    this.state = {
      "candidates" : [ "Biden", "Trump"],
      "chance" : 58,
      "margin" : 2.9,
      "votes" : 271
    };
  }

  componentDidMount() {

    client.onopen = () => {
      console.log('Web Socket Client Connected!!');
    };

    client.onmessage = (message) => {
      console.log('Got message!! ' + message.data);
      let newPosition = JSON.parse(message.data);
      console.log('New position = ' + newPosition)
      this.setState({"position" : newPosition})
    };
  }

  render() {
    return (
        <div>
          <ChanceMeter chance={this.state.chance}/>
          <MarginMeter margin={this.state.margin}/>
          <ElectoralVotesMeter votes={this.state.votes}/>
        </div>
    );
  }
}

export default App;
