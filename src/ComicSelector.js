import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';
import moment from 'moment';

class ComicSelector extends Component {
  constructor(props) {
    super(props);
    this.getComics = this.getComics.bind(this);
    this.state = {
      comics: [],
      characters: [],
    };
  }

  getComics() {
    // const marvelURL = 'https://gateway.marvel.com/v1/public/comics';
    // const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
    let startDate = "1985-01-01";
    let endDate = "1985-01-30";
    // axios.get(marvelURL, {
    //   params: {
    //     dateRange: decodeURI(encodeURI("1985-01-01,985-01-30")),
    //     apiKey: myApi,
    //   },
    // })
    axios.get(`https://gateway.marvel.com/v1/public/comics?dateRange=${startDate}%2C${endDate}&apikey=3bfdbc625fb1b18126abd87d3894d2d4`)
    .then((res) => {
      const incomingComics = res.data.data.results;
      this.filterCharacters(incomingComics);
    })
    .then(() => {
      console.log(this.state.comics);
    })
    .catch(function (error) {
      console.log(error);
    });
    ;
  }

  filterCharacters(comics) {
    let characters = [];
    comics.forEach((comic) => {
      let hasCharacter = comic.characters.available;
      if (hasCharacter !== 0) {
        characters.push(comic.characters.items[0].name);
      }
    });
    console.log(characters);
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
