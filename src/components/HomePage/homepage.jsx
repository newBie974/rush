import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import {
  Link
} from 'react-router-dom';

import getAll from '../../api/getAll';

import { PokemonContext } from '../app';

const HomePage = () => {
  const { pokemons, setPokemons }= useContext(PokemonContext);
  const { list, filter } = pokemons;
  console.log(pokemons)
  useEffect(() => {
    (async function hookHandleGetAllPokemons() {
      const allPokemons = await getAll();
      setPokemons({ list: allPokemons, filter: allPokemons})
    })()
  }, [])

  return (
    <section>
      { filter.length
        ? <div> 
            Tous les pokemons {filter.length}
            <ul>
              {filter.map(({ id, name, link }) => 
                <li key={id} data-search={name}>
                  <Link to={`/${id}`} >{id} - {name}</Link>
                </li>
              )}
            </ul>
          </div>
        : <div> { list.length && !filter.length ? 'Pas de resultat recherche' : 'Loading...'} </div>
      }
    </section>
  );
};

export default HomePage;
