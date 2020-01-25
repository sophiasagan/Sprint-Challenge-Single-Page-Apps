import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin-bottom: 2%;
`

export default function SearchForm({characters, setDisplay}) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  
  useEffect(() => {
    setDisplay(
      characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())))
  }, [search]);

  // const handleChange = e => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  return (
    <SearchBar className="search-form">
     <label>
       <input
        type="text"
        name="search"
        value={search}
        placeholder="Search for a character..."
        onChange={handleChange}
       />
     </label>
    </SearchBar>
  );
}