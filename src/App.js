import React, { Component } from 'react';
import Countdown from './Countdown';
import './index.css';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <header className="App-header">
        <h3 className="title">New Year's Eve is coming soon (Midnight of 30th to 31st Dec, UTC time):</h3>
          <Countdown date={`${year}-12-30T00:00:00`} />
        </header>
      </div>
    );
  }
  
}

export default App;
