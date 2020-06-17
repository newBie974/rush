import React from 'react';

import Styled from './searchBar.styled';

const SearchBar = ({
  value,
  onChange
}) => (
  <Styled value={value} onChange={onChange}/>
)

export default SearchBar;
