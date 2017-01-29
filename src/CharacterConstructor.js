import React, { Component } from 'react';
// css delcaration goes here
// import axios from 'axios';

class CharacterConstructor extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidUpdate() {
        console.log( this.props );
    }


    getCharacterDetails() {
        // const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        // const marvelURL = `https://gateway.marvel.com/v1/public/comics?dateRange=${ startDate }%2C${ endDate }`;
        // axios.get( marvelURL, {
        //     params: {
        //         apikey: myApi,
        //     },
        // })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default CharacterConstructor;
