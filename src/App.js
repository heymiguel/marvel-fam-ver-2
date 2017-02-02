import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import DateSelector from './DateSelector.js';
import ComicSelector from './ComicSelector.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.state = {
      startDate: "",
      endDate: "",
      showSelector: false
    };
  }

  handleDateSelect(newDate) {
    this.setState({
      startDate: newDate.start,
      endDate: newDate.end
    });
    this.showMe();
    console.log(this.state);
  }

  showMe() {
    let showIt = this.state.showSelector;
    showIt = true;
    this.setState({
      showSelector: showIt
    });
  }

  render() {
    let theSelector = null;
    let theTagline = null;
    console.log(this.state);
    if (this.state.showSelector) {
      theSelector = (
        <ComicSelector startDate={ this.state.startDate } endDate={ this.state.endDate }></ComicSelector>
      );
      theTagline = (
        <div>
          <p>
            { this.state.startDate }
          </p>
          <p>
            "...A day unlike any other."
          </p>
        </div>

      );
    } else {
      theSelector = <p> pick a date and hit that button!</p>;
      theTagline = null;
    }
    return (
      <div className="App">
        <Header> </Header>
        <DateSelector selectDate={ this.handleDateSelect }></DateSelector>
        { theTagline }
        { theSelector }
      </div>
      );
  }
}

export default App;

// refresher for the flow of your old application
// take a date (done!)
// proper format being: 2013-01-01,2013-01-02 (done!)
// API CALL  return comics released on that date (done!)
// if there is nothing on that day then expand the search to include the month. That normally does it. (later..)
// go through those comics and find a list of characters
// make another call to find those characters
// API CALL to get the images related to those characters
// output the character names and their corresponding images to the page.

// conditional rendering for the main page.
