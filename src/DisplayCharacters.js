import React, { Component } from 'react';
// css delcaration goes here


class DisplayCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        };
    }

    render() {

        // console.log(this.props.completeCharacters[0] + "!!");
        if (this.props.completeCharacters[0] === undefined) {
            return (
                <div>
                  nope
                </div>
                );
        } else {
            console.log('DisplayCharacters RE rendered');
            return (
                <div>
                  <ul>
                    { this.props.completeCharacters.map((character, index) => {
                          return (
                              <li key={ index }>
                                <p>
                                  { character.name }
                                </p>
                              </li>
                          )
                      
                      }) }
                  </ul>
                </div>
                );
        }
    }
}

export default DisplayCharacters;
// ask Ryan Brunner why you can log props in the component but 1) cant use it in a loop 2) pass it into state