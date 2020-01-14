import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getPokemonDetails } from '../../redux/pokemon/pokemon.actions';

const PokemonDetailsPage = ({ details, getPokemonDetails }) => {
  if (!details) return <div>Loading...</div>;

  return (
    <div style={{ color: '#fff' }}>
      <h2>{details.name}</h2>
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
