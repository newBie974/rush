import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import getById from '../../api/getById';

const User = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    (async function hookHandleGetPokemon() {
      const pokemonById = await getById(id);
      setPokemon(pokemonById)
    })()
  }, [id]);

  return (
    <section>
      Name: { pokemon.name }
      Id: { pokemon.order }
      Base: { pokemon.base_experience }
      Height: { pokemon.height }
    </section>
  )
};

export default User;
