import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link
} from 'react-router-dom';

import SearchBar from '../../modules/SearchBar/searchBar';

import getAll from '../../api/getAll';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const [search, setSearch] = useState('');

  const loadingMessage = () => {
    if (pokemons.length && !pokemonFiltered.length) {
      return 'Pas de resultat recherche';
    }
    return 'Loading...';
  }

  const handleSearch = (term) => {
    setSearch(term);
    if (!term) {
      setPokemonFiltered(pokemons);
      return;
    }
    const filteredList = pokemons
      .filter(({ name }) => name.startsWith(term));
    setPokemonFiltered(filteredList);
    return;
  }

  useEffect(() => {
    (async function hookHandleGetAllPokemons() {
      const allPokemons = await getAll();
      setPokemons(allPokemons);
      setPokemonFiltered(allPokemons);
    })()
  }, [])

  return (
    <section>
      <SearchBar onChange={event => handleSearch(event.target.value)}/>
      { !pokemons.length && <div> Loading... </div> }
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
        : <div> {() => loadingMessage()} </div>
      }
    </section>
  );
};

export default HomePage;
