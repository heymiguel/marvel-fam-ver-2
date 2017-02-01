import React, { Component } from 'react';
// css delcaration goes here
import axios from 'axios';

class DisplayCharacters extends Component {
    constructor(props) {
        super(props);
        this.getCharacterDetails = this.getCharacterDetails.bind(this);
        this.state = {
            characterList: []
        };
    }

    getCharacterDetails() {
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        let charList = [];
        for (let characterName of this.props.completeCharacters) {
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
            characterList: charList
        });
        console.log(this.state);
    }

    render() {
        // if (this.props.completeCharacters[0] === undefined) {
        //     return (
        //         <div>
        //           nope
        //         </div>
        //         );
        // } else {
        console.log('DisplayCharacters RE rendered');
        console.log(this.props.completeCharacters + "   !!");
        return (
            <div>
              blank
            </div>
            // <div>
            //   <ul>
            //     { this.state.characterList.map((character, index) => {
            //           return (
            //               <li key={ index }>
            //                 <p>
            //                   { character.name }
            //                 </p>
            //               </li>
            //           )

            //       }) }
            //   </ul>
            // </div>
            );
    // }
    }
}

export default DisplayCharacters;
// ask Ryan Brunner why you can log props in the component but 1) cant use it in a loop 2) pass it into state