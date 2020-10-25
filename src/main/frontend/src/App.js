//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ChanceMeter from "./ChanceMeter";
import MarginMeter from "./MarginMeter";
import ElectoralVotesMeter from "./ElectoralVotesMeter";

const client = new W3CWebSocket('ws://localhost:8080/pointer-web-socket');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "chance" : props.chance,
      "margin" : props.margin,
      "votes" : props.votes
    };
  }

  componentDidMount() {

    client.onopen = () => {
      console.log('Web Socket Client Connected!!');
    };

    client.onmessage = (message) => {
      console.log('Got message!! ' + message.data);
      let newData = JSON.parse(message.data);
      console.log('New Chance = ' + newData.chance);
      console.log('New Margin = ' + newData.margin);
      console.log('New votes = ' + newData.votes);
      this.setState(newData);
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
