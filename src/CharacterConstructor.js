import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';
import DisplayCharacters from './DisplayCharacters.js'

class CharacterConstructor extends Component {
    constructor(props) {
        super(props);
        this.getCharacterDetails = this.getCharacterDetails.bind(this);
        this.state = {
            completeCharacters: [],
            charListReady: false
        };
    }

    componentDidUpdate() {
        console.log(this.state.completeCharacters);
    }


    getCharacterDetails() {
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        let charList = [];
        for (let characterName of this.props.characters) {
            axios.get(marvelURL, {
                params: {
                    name: characterName,
                    apikey: myApi,
                },
            })
                .then((res) => {
                    let character = {
                        name: characterName,
                        description: res.data.data.results[0].description,
                        image: ""
                    };
                    charList.push(character);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        this.setState({
            completeCharacters: charList
        });
    // if ( this.state.completeCharacters !== [] ) {
    //     this.setState( { charListReady: true });
    //     console.log( 'ready!' );
    // }
    }


    // try passing a static array!
    render() {
        return (
            <div>
              <button onClick={ this.getCharacterDetails }>get character details</button>
              <DisplayCharacters completeCharacters={ this.state.completeCharacters }></DisplayCharacters>
            </div>
            );
    }
}

export default CharacterConstructor;
