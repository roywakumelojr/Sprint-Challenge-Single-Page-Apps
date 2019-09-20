import React, { useState } from "react";
import CharacterCard from './CharacterCard';
import Axios from "axios";

export default function SearchForm({ onSearch }) {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onNewSearch = (str) => {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${str}`)
    .then(res => setSearchResults(res.data.results));
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  return (
    <section className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault();
        onNewSearch(name)
        }}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button className="SubmitButton" type="submit">Search</button>
      </form>

      <div className="grid-view">
        {searchResults.map(res => <CharacterCard character={res} />)}
      </div>    
    </section>
  );
}
