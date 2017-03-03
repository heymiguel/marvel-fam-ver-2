import React, { Component } from 'react';
import './DisplayCharacters.css';

class DisplayCharacters extends Component {
    // constructor( props ) {
    //     super( props );

    // }

    componentDidUpdate(prevProps, prevState) {
        window.scrollTo(0, 500)
    }

    render() {
        if (this.props.showMe) {
            return (
                <div className="display-characters">
                  <h3>Amazing! You could be related to:</h3>
                  <ul className="character-holder">
                    { this.props.completeCharacters.map((character, index) => {
                          return (
                              <li className="character" key={ index }>
                                <img src={ character.image } alt=""></img>
                                <div className="character-text">
                                  <p className="name">
                                    { character.name }
                                  </p>
                                  <p className="description">
                                    { character.description }
                                  </p>
                                </div>
                              </li>
                          )
                      }) }
                  </ul>
                  <footer>
                    <div className="legal-and-credits">
                      <p> re-built and re-designed with geek-sweat by <a href="http://www.twitter.com/@heymiguel">this true believer</a></p>
                      <p className="copyright">
                        all characters, their photos and respective descriptions used on this site property of Marvel.
                      </p>
                    </div>
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