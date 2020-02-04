import React, { useState, useEffect } from 'react';
import Character from '../components/Character';
import { getCharacter } from '../services/rickAndMortyApi';


const CharacterFn = () => {
  const [character, updateCharacter] = useState({
    image: '',
    name: ''
  });


  useEffect(() => {
    handleCharChange();
  }, []);

  const handleCharChange = () => {
    getCharacter()
      .then(character => updateCharacter(character)
      );

  };

  return (
    <>
      <button onClick={handleCharChange}>New Character</button>
      <Character image={character.image} name={character.name}/>
    </>
  );
    
};

export default CharacterFn;
