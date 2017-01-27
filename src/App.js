import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import DateSelector from './DateSelector.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.state = {
      date: ""
    };
  }

  handleDateSelect(newDate) {
    console.log(newDate);
    this.setState({
      date: newDate
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <DateSelector selectDate={this.handleDateSelect}> </DateSelector>
        <p>
          {this.state.date}
        </p>
      </div>
    )
  }
}

export default App;
