import React, { Component } from 'react';
// css delcaration goes here
import DisplayCharacters from './DisplayCharacters.js'
import axios from 'axios';
// import moment from 'moment';

class ComicSelector extends Component {
    constructor(props) {
        super(props);
        this.getComics = this.getComics.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
        // this.getCharacterDetails = this.getCharacterDetails.bind(this);
        this.state = {
            characters: ["No Characters Found"],
        };
    }

    getComics() {
        let startDate = "1985-11-01";
        let endDate = "1985-11-10";
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = `https://gateway.marvel.com/v1/public/comics?dateRange=${ startDate }%2C${ endDate }`;
        axios.get(marvelURL, {
            params: {
                apikey: myApi,
            },
        })
            .then((res) => {
                const incomingComics = res.data.data.results;
                // if there is nothing on that day then expand the search to include the month. That normally does it.
                // you still need to expand this search.
                this.filterCharacters(incomingComics);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    filterCharacters(comics) {
        let characters = [];
        comics.forEach((comic) => {
            let hasCharacter = comic.characters.available;
            if (hasCharacter !== 0) {
                characters.push(comic.characters.items[0].name);
            }
        });
        let filteredCharacters = new Set();
        characters.forEach((character) => {
            filteredCharacters.add(character);
        })
        filteredCharacters = Array.from(filteredCharacters);
        this.setState({
            characters: filteredCharacters
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
              <h3>Well met!</h3>
              <p>Currently assembling information for the following characters:</p>
              <ul>
                { this.state.characters.map((character, index) => {
                      return <li key={ index }>
                               { character } </li>;
                  }) }
              </ul>
              <button onClick={ this.getComics }> grab me comics </button>
              <DisplayCharacters completeCharacters={ this.state.characters }></DisplayCharacters>
            </div>
            );
    }
}

export default ComicSelector;
