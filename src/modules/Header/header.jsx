import React, { useEffect, useState } from 'react';

import Styled from './header.styled';

import SearchBar from '../../modules/SearchBar/searchBar';
import useDebounce from '../../hooks/useDebounce';


const Header = ({ Pokemon }) => {
  const [search, setSearch] = useState([]);
  const debounceTerm = useDebounce(search, 200);

  useEffect(() => {
    const handleSearch = (term) => {
      if (!term) {
        // setPokemonFiltered(pokemons);
        return;
      }
      // const filteredList = Pokemon.list
      //   .filter(({ name }) => name.startsWith(term));
      // setPokemonFiltered(filteredList);
      return;
    }
    (function hookHandlerSearch() {
      handleSearch(debounceTerm);
    })()
  }, [debounceTerm])
  return (
    <Styled>
      Header <SearchBar onChange={event => setSearch(event.target.value)}/>
    </Styled>
  )
}

export default Header;
