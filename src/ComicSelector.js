import React, { Component } from 'react';
import './ComicSelector.css';
import DisplayCharacters from './DisplayCharacters.js'
import axios from 'axios';
import keys from './config.js';

class ComicSelector extends Component {
    constructor(props) {
        super(props);
        this.getComics = this.getComics.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
        this.getCharacterDetails = this.getCharacterDetails.bind(this);
        this.state = {
            characters: [],
            fullCharacter: [],
            showCharacterList: false
        };

    }

    getComics() {
        let startDate = this.props.startDate;
        let endDate = this.props.endDate
        const myApi = keys.key;
        const marvelURL = `https://gateway.marvel.com/v1/public/comics?dateRange=${ startDate }%2C${ endDate }`;
        let findTheseCharacters = this.state.characters;
        axios.get(marvelURL, {
            params: {
                apikey: myApi,
                limit: 7,
            },
        })
            .then((res) => {
                const incomingComics = res.data.data.results;
                findTheseCharacters = this.filterCharacters(incomingComics);
                this.setState({
                    characters: findTheseCharacters
                });
            })
            .then(() => {
                this.getCharacterDetails();
            })
            .then(() => {
                this.setState({
                    showCharacterList: true
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getCharacterDetails() {
        const myApi = keys.keyBak;
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        const imgSize = "portrait_xlarge";
        const imgType = ".jpg";
        let charList = this.state.characters;
        let newList = this.state.fullCharacter;
        for (let characterName of charList) {
            axios.get(marvelURL, {
                params: {
                    name: characterName,
                    apikey: myApi,
                    limit: 7,
                },
            })
                .then((res) => {
                    let character = {
                        name: characterName,
                        description: res.data.data.results[0].description,
                        image: (res.data.data.results[0].thumbnail.path + "/" + imgSize + imgType)
                    };
                    if (character.description === "") {
                        character.description = "Marvel.com does not have a description for this character. A description may be hosted at the marvel Wikia."
                    }
                    ;
                    newList.push(character);
                })
                .then(() => {
                    this.setState({
                        fullCharacter: newList
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    filterCharacters(comics) {
        let characters = this.state.characters;
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
        return filteredCharacters;
    }

    render() {

        const showChars = this.state.showCharacterList;
        let finalList = null;
        if (showChars) {
            finalList = <DisplayCharacters showMe={ true } completeCharacters={ this.state.fullCharacter }></DisplayCharacters>
        } else {
            finalList = null;
        }
        return (
            <div className="comic-selector">
              <button onClick={ this.getComics }> excelsior! </button>
              { finalList }
            </div>
            );
    }

}

export default ComicSelector;
