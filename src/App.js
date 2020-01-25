import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';

import styled from 'styled-components';

const Main = styled.main`
  background-color: #364f6b;
`;

export default function App() {
  return (
    <Main>
      <Header />
      <Route 
        exact
        path='/'
        component={WelcomePage}
      />
      <Route 
        exact
        path='/Characters'
        component={CharacterList}
      />
    </Main>
  );
}