import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin-bottom: 2%;
`

export default function SearchForm({characters, setDisplay}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    setDisplay(
      characters
        .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  }, [searchTerm]);

  return (
    <SearchBar className="search-form">
     <label>
       <input
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search for a character..."
        onChange={handleChange}
       />
     </label>
    </SearchBar>
  );
}