import React, { Component } from 'react';
import './DisplayCharacters.css';

class DisplayCharacters extends Component {
    // constructor( props ) {
    //     super( props );
    // }

    render() {
        if ( this.props.showMe ) {
            console.log( 'rendered' );
            return (
                <div className="display-characters">
                    <ul className="character-holder" >
                        {this.props.completeCharacters.map(( character, index ) => {
                            return (
                                <li className="character" key={index}>
                                    <img src={character.image} alt=""></img>
                                    <div className="character-text">
                                        <p className="name">
                                            {character.name}
                                        </p>
                                        <p className="description">
                                            {character.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <footer>
                        <div className="legal-and-credits">legal and credits</div>
                    </footer>
                </div>
            );

        } else {
            return (
                <div>
                    nope
                </div>
            );
        }
    }
}

export default DisplayCharacters;