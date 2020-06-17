import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/homepage';
import About from './About/about';
import User from './User/user';


const Routing = () => (
  <Switch>
    <Route path="/about" component={About}/>
    <Route path="/:id" component={User} />
    <Route path="/" component={HomePage} />
  </Switch>
)

export default Routing;
