import React, {
  useEffect,
  useState
} from 'react';
import {
  Link
} from 'react-router-dom';

import getAll from '../../api/getAll';

const HomePage = ({ pokemons }) => {
  const [list, setList] = useState(pokemons.list);
  const [filteredList, setFilteredList] = useState(pokemons.filtered);
  useEffect(() => {
    (async function hookHandleGetAllPokemons() {
      const allPokemons = await getAll();
      setList(allPokemons);
      setFilteredList(allPokemons)
    })()
  }, [])

  return (
    <section>
      { filteredList.length
        ? <div> 
            Tous les pokemons {filteredList.length}
            <ul>
              {filteredList.map(({ id, name, link }) => 
                <li key={id} data-search={name}>
                  <Link to={`/${id}`} >{id} - {name}</Link>
                </li>
              )}
            </ul>
          </div>
        : <div> { list.length && !filteredList.length ? 'Pas de resultat recherche' : 'Loading...'} </div>
      }
    </section>
  );
};

export default HomePage;
