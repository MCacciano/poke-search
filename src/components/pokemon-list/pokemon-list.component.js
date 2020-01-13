import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// components
import Preloader from '../preloader/preloader.component';
import PokemonListItem from '../pokemon-list-item/pokemon-list-item.component';

// styles
import { pokeList } from './pokemon-list.module.scss';

const PokemonList = ({ results }) => {
  if (!results) return <Preloader />;

  return (
    <ul className={pokeList}>
      {results.length > 0 &&
        results.map((pokemon, i) => (
          <PokemonListItem key={i} pokemon={pokemon} />
        ))}
    </ul>
  );
};

PokemonList.propTypes = {
  results: PropTypes.array
};

const mapStateToProps = ({ pokemon }) => ({
  results: pokemon.results
});

export default connect(mapStateToProps, null)(PokemonList);
