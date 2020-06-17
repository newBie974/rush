import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link
} from 'react-router-dom';

import SearchBar from '../../modules/SearchBar/searchBar';

import getAll from '../../api/getAll';

import useDebounce from '../../hooks/useDebounce';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const [search, setSearch] = useState([]);

  const debounceTerm = useDebounce(search, 200);
  const loadingMessage = () => {
    /** Shoulb be a component
      https://www.freecodecamp.org/forum/t/functions-are-not-valid-as-a-react-child/244914/4
     */
    if (pokemons.length && !pokemonFiltered.length) {
      return 'Pas de resultat recherche';
    }
    return 'Loading...';
  }


  useEffect(() => {
    (async function hookHandleGetAllPokemons() {
      const allPokemons = await getAll();
      setPokemons(allPokemons);
      setPokemonFiltered(allPokemons);
    })()
  }, [])


  useEffect(() => {
    const handleSearch = (term) => {
      if (!term) {
        setPokemonFiltered(pokemons);
        return;
      }
      const filteredList = pokemons
        .filter(({ name }) => name.startsWith(term));
      setPokemonFiltered(filteredList);
      return;
    }
    (function hookHandlerSearch() {
      handleSearch(debounceTerm);
    })()
  }, [debounceTerm])

  return (
    <section>
      <SearchBar onChange={event => setSearch(event.target.value)}/>
      { pokemonFiltered.length
        ? <div> 
            Tous les pokemons {pokemonFiltered.length}
            <ul>
              {pokemonFiltered.map(({ id, name, link }) => 
                <li key={id} data-search={name}>
                  <Link to={`/${id}`} >{id} - {name}</Link>
                </li>
              )}
            </ul>
          </div>
        : <div> {pokemons.length && !pokemonFiltered.length ? 'Pas de resultat recherche' : 'Loading...'} </div>
      }
    </section>
  );
};

export default HomePage;
