import React, { Component } from 'react';
import Character from '../components/Character';
import { getCharacter } from '../services/rickAndMortyApi';

export default class Characters extends Component {
    state = {
      image: '',
      name: ''
    }

    componentDidMount() {
      this.fetchCharacter();
    }

    updateCharacter = () => {
      this.setState(this.fetchCharacter());
    }


    fetchCharacter = () => {
      return getCharacter()
        .then(character => this.setState({ image: character.image, name: character.name }));
    }

    render() {
      const { image, name } = this.state;
      return (
        <>
          <button onClick={this.updateCharacter}>New Character</button>
          <Character image={image} name={name}/>
        </>
      );
    }

}
