import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: .5em solid gray;
  position: relative;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function CharacterCard({character}) {
  return (
    <Card>
      <div className='character-header'>
        <img src={character.image} alt={character.name} className='portrait' />
        <h3>{character.name}</h3>
      </div>
      <div className='character-info'>
        Species: <em><strong>{character.species}</strong></em>
      </div>
      <div className='character-info'>
        Origin: <strong>{character.origin.name}</strong>
      </div>
      <div className='character-info'>
        Created: <strong>{character.created}</strong>
      </div>
    </Card>
  );
}