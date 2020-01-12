import React from 'react';
import PropTypes from 'prop-types';

import { PokemonLi } from './pokemon-list-item.styles';

const PokemonListItem = ({ pokemon }) => {
  // pad pokemon id for image request
  const padIdToThree = id => (id <= 99999 ? `00${id}`.slice(-3) : id);
  const pokeID = url =>
    padIdToThree(
      pokemon.url
        .replace('https://pokeapi.co/api/v2/pokemon/', '')
        .replace('/', '')
    );
  const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID(
    pokemon.url
  )}.png`;
  // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png

  return (
    <PokemonLi>
      <h3>{pokemon.name}</h3>
      <img src={imgSrc} alt="A pokemon" />
    </PokemonLi>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonListItem;
