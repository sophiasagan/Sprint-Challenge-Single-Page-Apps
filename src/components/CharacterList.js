import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
        setDisplay(response.data.results);
      })
        .catch(error => {
          console.error(error);
        });
    }
    
    getCharacters();
  }, []);

  

  return (
    <>
      <SearchForm characters={characters} setDisplay={setDisplay}/>
      <section className="character-list grid-view">
      {display.map(character => {
        return <CharacterCard key={character.id} character={character}/>
      })}
      </section>
    </>
  );
}