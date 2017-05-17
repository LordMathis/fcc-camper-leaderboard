import React, { Component } from 'react';
import './App.css';
import LeaderboardContainer from './containers/LeaderboardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Camper Leaderboard</h1>
        </div>
        <LeaderboardContainer/>
      </div>
    );
  }
}

export default App;
