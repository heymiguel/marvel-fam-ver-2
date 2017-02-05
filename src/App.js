import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import DateSelector from './DateSelector.js';
import ComicSelector from './ComicSelector.js';

class App extends Component {
  constructor( props ) {
    super( props );
    this.handleDateSelect = this.handleDateSelect.bind( this );
    this.state = {
      startDate: "",
      endDate: "",
      showSelector: false,
    };
  }

  handleDateSelect( newDate ) {
    this.setState( {
      startDate: newDate.start,
      endDate: newDate.end,
    });
    this.showMe();
    console.log( this.state );
  }

  showMe() {
    let showIt = this.state.showSelector;
    showIt = true;
    this.setState( {
      showSelector: showIt,
    });
  }

  render() {
    let theSelector = null;
    let theTagline = null;
    console.log( this.state );
    if ( this.state.showSelector ) {
      theSelector = (
        <ComicSelector startDate={this.state.startDate} endDate={this.state.endDate} ></ComicSelector>
      );
      theTagline = (
        <div className="tagline">
          <p>
            "...A day unlike any other."
          </p>
        </div>

      );
    } else {
      theSelector = null;
      theTagline = null;
    }
    return (
      <div className="App">
        <Header> </Header>
        <p className="instructions">Enter your birthday:</p>
        <DateSelector selectDate={this.handleDateSelect}></DateSelector>
        {theTagline}
        {theSelector}
      </div>
    );
  }
}

export default App;

