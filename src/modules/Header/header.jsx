import React, { useEffect, useState, useContext } from 'react';

import Styled from './header.styled';

import SearchBar from '../../modules/SearchBar/searchBar';
import useDebounce from '../../hooks/useDebounce';

import { PokemonContext } from '../../components/app';

const Header = () => {
  const [search, setSearch] = useState([]);
  const debounceTerm = useDebounce(search, 200);
  const { pokemons, setPokemons }= useContext(PokemonContext);
  const { list, filter: originalFilter } = pokemons;
  useEffect(() => {
    const handleSearch = (term) => {
      if (!term || !term.length) {
        setPokemons({ ...pokemons, filter: pokemons.list });
        return;
      }
      console.log(list);
      const filter =  list
        .filter(({ name }) => name.startsWith(term));
      setPokemons({ ...pokemons, filter });
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
