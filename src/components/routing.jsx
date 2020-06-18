import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/homepage';
import About from './About/about';
import User from './User/user';


const Routing = ({ pokemons }) => (
  <Switch>
    <Route path="/about" component={About}/>
    <Route path="/:id" component={User} />
    <Route path="/" >
      <HomePage pokemons={{ list: pokemons.list,  filtered: pokemons.filtered }}/>
    </Route>
  </Switch>
)

export default Routing;
