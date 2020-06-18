import React, { useEffect, useState, useContext } from 'react';

import Styled from './header.styled';

import SearchBar from '../../modules/SearchBar/searchBar';
import useDebounce from '../../hooks/useDebounce';

import { PokemonContext } from '../../components/app';

const Header = () => {
  const [search, setSearch] = useState([]);
  const debounceTerm = useDebounce(search, 200);
  const { pokemons, setPokemons }= useContext(PokemonContext);
  const { list } = pokemons;
  useEffect(() => {
    const handleSearch = (term) => {
      if (!term || !term.length) {
        setPokemons({ list, filter: list });
        return;
      }

      const filter =  list
        .filter(({ name }) => name.startsWith(term));
      setPokemons({ list, filter });
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
