import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';

class ComicSelector extends Component {
  constructor(props) {
    super(props);
    this.getComics = this.getComics.bind(this);
    this.state = {
      comics: [],
    };
  }

  getComics() {
    // const marvelURL = 'https://gateway.marvel.com/v1/public/comics';
    // const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
    axios.get(`https://gateway.marvel.com/v1/public/comics?dateRange=2013-01-01%2C2013-01-02&apikey=3bfdbc625fb1b18126abd87d3894d2d4`)
    .then((res) => {
      const incomingComics = res.data.results;
      console.log(res);
      this.setState({
        comics: incomingComics,
      });
    })
    .then(() => {
      console.log(this.state.comics);
    })
    .catch(function (error) {
      console.log(error);
    });
    ;
  }

// API CALL  return comics released on that date (on it)
// if there is nothing on that day then expand the search to include the month. That normally does it.
  render() {
    return (
      <div>
        <p>
          Comic selector goes here.
        </p>
        <button onClick={this.getComics}> grab me comics </button>
      </div>
    );
  }
}

export default ComicSelector;
