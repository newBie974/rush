import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link
} from 'react-router-dom';

import getAll from '../../api/getAll';

const HomePage = ({ Pokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);

  useEffect(() => {
    (async function hookHandleGetAllPokemons() {
      const allPokemons = await getAll();
      setPokemons(allPokemons);
      setPokemonFiltered(allPokemons);
    })()
  }, [])

  return (
    <section>
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
