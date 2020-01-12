import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { getAllPokemon } from '../../redux/pokemon/pokemon.actions';

import Preloader from '../preloader/preloader.component';
import PokemonListItem from '../pokemon-list-item/pokemon-list-item.component';

// styled components
import { PokemonUl } from './pokemon-list.styles';

const PokemonList = ({ results, getAllPokemon }) => {
  useEffect(() => {
    getAllPokemon();
    // eslint-disable-next-line
  }, []);

  if (!results) return <Preloader />;

  return (
    <PokemonUl>
      {results.length > 0 &&
        results.map((pokemon, i) => (
          <PokemonListItem key={i} pokemon={pokemon} />
        ))}
    </PokemonUl>
  );
};

PokemonList.propTypes = {
  results: PropTypes.array,
  getAllPokemon: PropTypes.func
};

const mapStateToProps = ({ pokemon }) => ({
  results: pokemon.results
});

const mapDispatchToProps = dispatch => ({
  getAllPokemon: () => dispatch(getAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
