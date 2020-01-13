import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getPokemonDetails } from '../../redux/pokemon/pokemon.actions';

// styles
import {
  pokeDetailsLink,
  pokeListItem,
  pokeName,
  pokeImg
} from './pokemon-list-item.module.scss';
import { Link } from 'react-router-dom';

const PokemonListItem = ({ pokemon, pokeResult, getPokemonDetails }) => {
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

  const onPokemonClick = e => {
    getPokemonDetails(pokemon.name.toLowerCase());
    console.log(pokemon, pokeResult);
  };

  return (
    <li onClick={onPokemonClick} className={pokeListItem}>
      <Link
        className={pokeDetailsLink}
        to={{ pathname: `/pokemon/${pokemon.name}` }}
      />
      <h3 className={pokeName}>{pokemon.name}</h3>
      <img className={pokeImg} src={imgSrc} alt="A pokemon" />
    </li>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  results: PropTypes.array,
  details: PropTypes.object
};

const mapStateToProps = ({ details, pokemon: { results } }) => ({
  details,
  results
});

const mapDispatchToProps = dispatch => ({
  getPokemonDetails: name => dispatch(getPokemonDetails(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
