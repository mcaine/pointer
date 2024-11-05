//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from 'axios';
import { Table, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

import ChanceMeter from "./ChanceMeter";
import MarginMeter from "./MarginMeter";
import ElectoralVotesMeter from "./ElectoralVotesMeter";

const client = new W3CWebSocket('ws://localhost:8080/pointer-web-socket');
//const client = new W3CWebSocket('wss://carparkcats.herokuapp.com/pointer-web-socket');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "chance" : this.props.chance,
      "margin" : this.props.margin,
      "votes" : this.props.votes,
      "isForecast" : this.props.isForecast
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
      console.log('New isForecast = ' + newData.isForecast);
      this.setState({ chance: newData.chance, margin:newData.margin, votes: newData.votes, isForecast: newData.isForecast});
    };

    axios
        .get(`/status`)
        .then(res => {
          if (res.status === 200) {
            this.setState(res.data);
          } else {
            console.log("status request got response status " + res.status);
          }
        })
        .catch(function(error) {
          console.log(error)
        });

  }

  render() {
    let displayChance = this.state.chance;
    let displayChanceName = "Trump";
    let forecastText = "";
    if (this.state.isForecast) {
      forecastText = "FORECAST";
    }

    if (this.state.chance <= 50) {
      displayChance = 100 - displayChance;
      displayChanceName = "Harris";
    }

    let displayMargin = Math.abs(this.state.margin);
    let displayMarginName = "Trump";
    if (this.state.margin <= 0) {
      displayMarginName = "Harris";
    }

    let displayVotes = this.state.votes > 0 ? this.state.votes : 540 + this.state.votes;
    let displayVotesText = displayVotes;
    let displayVotesName = "Trump";
    if (this.state.votes <= 0 ) {
      displayVotesName = "Harris";
      displayVotesText = 540 - displayVotes;
    }

    return (
        <div>
          <Container>
            <Table>
              <tbody>
              <tr>
                <td>
                  <div>Chance of Winning Presidency</div>
                  <div className="stats">{displayChance}% {displayChanceName}</div>
                  <div>{forecastText}</div>
                </td>
                <td>
                  <ChanceMeter chance={this.state.chance}/>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Popular Vote Margin</div>
                  <div className="stats">{displayMarginName} +{displayMargin}%</div>
                  <div>{forecastText}</div>
                </td>
                <td>
                  <MarginMeter margin={this.state.margin}/>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Electoral Votes</div>
                  <div className="stats">{displayVotesText} {displayVotesName}</div>
                  <div>{forecastText}</div>
                </td>
                <td>
                  <ElectoralVotesMeter votes={displayVotes}/>
                </td>
              </tr>
              </tbody>
            </Table>
          </Container>
        </div>
    );
  }
}

export default App;
