import React from 'react';
import {
  Link
} from 'react-router-dom';

import Styled from './nav.styled';

const Nav = () => (
  <Styled>
      <Styled.list>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Styled.list>
  </Styled>
);

export default Nav;
