export const getCharacter = () => {
  return fetch('https://rickandmortyapi.com/api/character/1')
    .then(res => res.json())
    .then(({ image, name }) => ({
      image: image,
      name: name
    }));
};
