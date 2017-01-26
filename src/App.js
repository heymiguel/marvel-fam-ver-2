import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import DateSelector from './DateSelector.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <DateSelector> </DateSelector>
      </div>
    )
  }
}

export default App;
