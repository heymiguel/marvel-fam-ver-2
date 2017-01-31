import React, { Component } from 'react';
// css delcaration goes here


class DisplayCharacters extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            characterList: []
        };
    }

    render() {
        console.log( this.props.completeCharacters );
        return (
            <div>
                <ul>
                    {this.state.characterList.map(( character, index ) => {
                        return <li key={index}>
                            <p>{character.index.name}</p>
                            <p>{character.index.description}</p>
                        </li>
                    })}

                </ul>
            </div>
        );
    }
}

export default DisplayCharacters;