import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

// redux
import { connect } from 'react-redux';
import { getAllPokemon } from '../../redux/pokemon/pokemon.actions';

// components
import PokemonListItem from '../pokemon-list-item/pokemon-list-item.component';

// styles
import { pokeList } from './pokemon-list.module.scss';

const PokemonList = ({ results, getAllPokemon }) => {
  if (!results) return <div>Loading...</div>;

  const fetchMore = () => {
    getAllPokemon(true);
  };

  return (
    <ul className={pokeList}>
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {results.length > 0 &&
          results.map((pokemon, i) => (
            <PokemonListItem key={i} pokemon={pokemon} />
          ))}
      </InfiniteScroll>
    </ul>
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
  getAllPokemon: prev => dispatch(getAllPokemon(prev))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
