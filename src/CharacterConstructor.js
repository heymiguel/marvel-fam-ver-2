import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';

class CharacterConstructor extends Component {
    constructor( props ) {
        super( props );
        this.getCharacterDetails = this.getCharacterDetails.bind( this );
    }

    componentDidUpdate() {
        console.log( this.props.characters );
    }


    getCharacterDetails() {
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        axios.get( marvelURL, {
            params: {
                name: this.props.characters[ 1 ],
                apikey: myApi,
            },
        })
            .then(( res ) => {
                console.log( res );
            })
            .catch(( error ) => {
                console.log( error );
            })
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
