import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';


import Routing from './routing';

import Header from '../modules/Header/header';
import Footer from '../modules/Footer/footer';
import Nav from '../modules/Nav/nav';
import Aside from '../modules/Aside/aside';

const App = () => (
  <Router>
    <Header />
    <Nav />
    <Routing />
    <Aside />
    <Footer />
  </Router>
);

export default App;
