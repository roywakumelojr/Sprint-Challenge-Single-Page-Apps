import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters(res.data.results);
      setIsLoading(false);
    })
    .catch(err => console.error(err))
  }, []);

  return (
    <section className="character-list">
      {!isLoading ? characters.map(character => <CharacterCard character={character} />) : (<p>Content is loading...</p>)}
    </section>
  );
}
