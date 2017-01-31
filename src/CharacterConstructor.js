import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';

class CharacterConstructor extends Component {
    constructor( props ) {
        super( props );
        this.getCharacterDetails = this.getCharacterDetails.bind( this );
        this.completeCharacter = [];
    }

    componentDidUpdate() {
        console.log( this.props.characters );
    }


    getCharacterDetails() {
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        for ( let characterName of this.props.characters ) {
            axios.get( marvelURL, {
                params: {
                    name: characterName,
                    apikey: myApi,
                },
            })
                .then(( res ) => {
                    let character = {
                        name: characterName,
                        description: res.data.data.results[ 0 ].description,
                        image: ""
                    };
                    this.completeCharacter.push( character );
                })
                .catch(( error ) => {
                    console.log( error );
                })
        }
        console.log( this.completeCharacter );
    }

    displayCharacters() {

    }

    render() {
        return (
            <div>
                <button onClick={this.getCharacterDetails}>get character details</button>
            </div>
        );
    }
}

export default CharacterConstructor;
