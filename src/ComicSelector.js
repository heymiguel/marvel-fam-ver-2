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
        this.getCharacterDetails = this.getCharacterDetails.bind(this);
        this.state = {
            characters: [],
            fullCharacter:[],
            showCharacterList: false
        };
    }

    getComics() {
        let startDate = this.props.startDate;
        let endDate = this.props.endDate
        const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const marvelURL = `https://gateway.marvel.com/v1/public/comics?dateRange=${ startDate }%2C${ endDate }`;
        let findTheseCharacters = this.state.characters;
        // let finalList = this.state.characters;
        axios.get(marvelURL, {
            params: {
                apikey: myApi,
            },
        })
            .then((res) => {
                const incomingComics = res.data.data.results;
                // if there is nothing on that day then expand the search to include the month. That normally does it.
                // you still need to expand this search.
                findTheseCharacters = this.filterCharacters(incomingComics);
                this.setState({characters: findTheseCharacters});
            })
            .then(()=>{
                this.getCharacterDetails();
            })
            .then(()=>{
                this.setState({
                    showCharacterList: true
                });
                
                // console.log(this.state);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getCharacterDetails() {
        
        // const myApi = '3bfdbc625fb1b18126abd87d3894d2d4';
        const myApi = 'aba7a41eec8c1077392a4631681a7b73';
        const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?';
        let charList = this.state.characters;
        let newList = this.state.fullCharacter;
        console.log(charList);
        for ( let characterName of charList) {
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

                    newList.push( character );
                    // return charList;
                })
                .then(()=>{
                    this.setState({fullCharacter: newList});
                })
                .catch(( error ) => {
                    console.log( error );
                })
        }
        
        // console.log(charList);
        // this.setState( {
        //     characterList: charList,
        //     showCharacterList: true
        // });
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
        console.log(filteredCharacters);
        return filteredCharacters;
    }

    render() {
        
        const showChars = this.state.showCharacterList;
        console.log(this.state, showChars);
        let finalList = null;
        if (showChars){
            finalList = <DisplayCharacters showMe={true} completeCharacters={this.state.fullCharacter} ></DisplayCharacters>
        } 
        // else {
        //     finalList = <DisplayCharacters showMe={false}></DisplayCharacters>
        // }
        return (
            <div>
              <h3>Well met!</h3>
              <button onClick={ this.getComics }> grab me comics </button>
              {finalList}
              
            </div>
            );
    }
}

export default ComicSelector;
