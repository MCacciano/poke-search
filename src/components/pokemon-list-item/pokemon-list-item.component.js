import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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

const PokemonListItem = ({
  pokemon: { name, url },
  pokeResult,
  details,
  getPokemonDetails
}) => {
  const history = useHistory();
  // pad pokemon id for image request
  const padIdToThree = id => (id <= 99999 ? `00${id}`.slice(-3) : id);

  const pokeID = url =>
    padIdToThree(
      url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    );

  const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID(
    url
  )}.png`;

  const onPokemonClick = e => {
    console.log(imgSrc);
    getPokemonDetails(name.toLowerCase());
    history.push(`/pokemon/${name}`, { imgSrc });
  };

  return (
    <li onClick={onPokemonClick} className={pokeListItem}>
      <h3 className={pokeName}>{name}</h3>
      <img className={pokeImg} src={imgSrc} alt="A pokemon" />
    </li>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  results: PropTypes.array,
  details: PropTypes.object
};

const mapStateToProps = ({ pokemon: { results, details } }) => ({
  details,
  results
});

const mapDispatchToProps = dispatch => ({
  getPokemonDetails: name => dispatch(getPokemonDetails(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
