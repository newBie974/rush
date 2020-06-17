import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';


import Routing from './routing';

import Header from '../modules/Header/header';
import Footer from '../modules/Footer/footer';
import Nav from '../modules/Nav/nav';
import Aside from '../modules/Aside/aside';

import Styled from './app.styled';

const pokemons = {
  filtered: {},
  list: {}
};
const PokemonContext = React.createContext(pokemons);

const App = () => (
  <PokemonContext.Provider value={{}}>
    <Router>
      <PokemonContext.Consumer>
        {
          (value) => {
            return (<Header Pokemon={value}/>);
          }
        }
      </PokemonContext.Consumer>
      <Nav />
      <PokemonContext.Consumer>
        {
          (value) => {
            return (
              <Styled>
                <Routing Pokemon={value}/>
              </Styled>
            )
          }
        }
      </PokemonContext.Consumer>
      <Aside />
      <Footer />
    </Router>
  </PokemonContext.Provider>
);

export default App;
