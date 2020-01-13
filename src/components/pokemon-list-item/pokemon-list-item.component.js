import React from 'react';
import PropTypes from 'prop-types';

// styles
import { pokeListItem, pokeImg } from './pokemon-list-item.module.scss';

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
    <li className={pokeListItem}>
      <h3>{pokemon.name}</h3>
      <img className={pokeImg} src={imgSrc} alt="A pokemon" />
    </li>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonListItem;
