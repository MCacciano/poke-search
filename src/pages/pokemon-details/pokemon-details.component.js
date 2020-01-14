import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { getPokemonDetails } from '../../redux/pokemon/pokemon.actions';

import {
  pokeCard,
  pokeImgContainer,
  pokeImg
} from './pokemon-details.module.scss';

const PokemonDetailsPage = ({ details, getPokemonDetails }) => {
  const location = useLocation();
  const { imgSrc } = location.state;

  useEffect(() => {
    getPokemonDetails('charizard');
  }, []);

  if (!details) return <div>Loading...</div>;

  const { name } = details;

  return (
    <div className={pokeCard}>
      <div className={pokeImgContainer}>
        <img className={pokeImg} src={imgSrc} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

PokemonDetailsPage.propTypes = {
  details: PropTypes.object,
  getPokemonDetails: PropTypes.func
};

const mapStateToProps = ({ pokemon }) => ({
  details: pokemon.details
});

const mapDispatchToProps = dispatch => ({
  getPokemonDetails: name => dispatch(getPokemonDetails(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailsPage);
