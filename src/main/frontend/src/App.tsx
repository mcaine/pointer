import { useState } from 'react'

import ChanceMeter from './ChanceMeter'
import MarginMeter from './MarginMeter'
import ElectoralVotesMeter from './ElectoralVotesMeter'

import './App.css'

import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from 'axios';
import { Table, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [chance, setChance] = useState(0)
  const [margin, setMargin] = useState(0)
  const [votes, setVotes] = useState(0)
  const [isForecast, setIsForecast] = useState(true)

  let displayChance = chance;
      let displayChanceName = "Trump";
      let forecastText = "";
      if (isForecast) {
        forecastText = "FORECAST";
      }

      if (chance <= 50) {
        displayChance = 100 - displayChance;
        displayChanceName = "Harris";
      }

      let displayMargin = Math.abs(margin);
      let displayMarginName = "Trump";
      if (margin <= 0) {
        displayMarginName = "Harris";
      }

      let displayVotes = votes > 0 ? votes : 540 + votes;
      let displayVotesText = displayVotes;
      let displayVotesName = "Trump";
      if (votes <= 0 ) {
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
                  <ChanceMeter chance={chance}/>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Popular Vote Margin</div>
                  <div className="stats">{displayMarginName} +{displayMargin}%</div>
                  <div>{forecastText}</div>
                </td>
                <td>
                  <MarginMeter margin={margin}/>
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

export default App