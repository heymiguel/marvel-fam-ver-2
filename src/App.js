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
    };
  }

  handleDateSelect(newDate) {
    console.log(newDate);
    this.setState({
      startDate: newDate.start,
      endDate: newDate.end,
    });
  }


  render() {
    return (
      <div className="App">
        <Header> </Header>
        <DateSelector selectDate={this.handleDateSelect}></DateSelector>
        <p>
          Beginning range {this.state.startDate}.
        </p>
        <p>
          End range {this.state.endDate}.
        </p>
        <ComicSelector></ComicSelector>
        { /* ComicSelector contains Character Selector > Output?*/}
      </div>
    );
  }
}

export default App;

// refresher for the flow of your old application
// take a date (done!)
// proper format being: 2013-01-01,2013-01-02 (done!)
// API CALL  return comics released on that date (on it)
// if there is nothing on that day then expand the search to include the month. That normally does it.
// go through those comics and find a list of characters
// make another call to find those characters
// API CALL to get the images related to those characters
// output the character names and their corresponding images to the page.

// conditional rendering for the main page.
