import React, { Component } from 'react';
// css delcaration goes here

class DisplayCharacters extends Component {
    // constructor( props ) {
    //     super( props );
    // }

    render() {
        if ( this.props.showMe ) {
            console.log( 'rendered' );
            return (
                <div>
                    <ul>
                        {this.props.completeCharacters.map(( character, index ) => {
                            return (
                                <li key={index}>
                                    <p>
                                        {character.name}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
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