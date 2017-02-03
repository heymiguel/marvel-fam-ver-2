import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Find Your Marvel Family</h2>
          <p>
            There's a secret hiding in all of us. We're all superpeople. Have you ever wondered who your superfamily is? Wonder no more! Thanks to the magic of the Marvel Database, this web app searches over 70 years of comic book history - and matches your birthday with the printed release dates of characters and comics from the Marvel Universe! When you're ready, hit EXCELSIOR! to get your FAN-cestry!
          </p>
        </div>
      </div>
    );
  }
}
export default Header;
