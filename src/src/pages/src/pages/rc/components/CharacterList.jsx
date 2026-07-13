import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0, 8)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {characters.map((char) => (
        <CharacterCard key={char.id} name={char.name} image={char.image} species={char.species} />
      ))}
    </div>
  );
}
