import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';


import Routing from './routing';

import Header from '../modules/Header/header';
import Footer from '../modules/Footer/footer';
import Nav from '../modules/Nav/nav';
import Aside from '../modules/Aside/aside';

import Styled from './app.styled';

const PokemonContext = React.createContext();
/**
  https://blog.nathanaelcherrier.com/en/updating-react-context-from-consumer/
  https://www.taniarascia.com/using-context-api-in-react/
 */
const App = () => {
  const [pokemons, setPokemons] = useState({ list: {}, filter: {} });
  return (
    <Router>
      <PokemonContext.Provider value={{ pokemons, setPokemons }}>
        <Header />
        <Nav />
        <Styled>
          <Routing />
        </Styled>
        <Aside />
        <Footer />
      </ PokemonContext.Provider>
    </Router>
  );
}

export default App;
export {
  PokemonContext
}
