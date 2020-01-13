import React, { useState } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import {
  getAllPokemon,
  getPokemonDetails
} from '../../redux/pokemon/pokemon.actions';

// styles
import { searchForm, searchText, submitBtn } from './search-form.module.scss';

const SearchForm = ({ getAllPokemon, getPokemonDetails }) => {
  const [name, setName] = useState('');

  const onSearchSubmit = e => {
    e.preventDefault();

    if (!name) {
      getAllPokemon();
    } else {
      getPokemonDetails(name);
    }
  };

  const onInputChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={onSearchSubmit} className={searchForm}>
      <input
        onChange={onInputChange}
        className={searchText}
        type="text"
        name="search"
        placeholder="Search for a pokemon"
      />
      <input className={submitBtn} type="submit" value="Search" />
    </form>
  );
};

SearchForm.propTypes = {
  getAllPokemon: PropTypes.func.isRequired,
  getPokemonDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getAllPokemon: () => dispatch(getAllPokemon()),
  getPokemonDetails: name => dispatch(getPokemonDetails(name))
});

export default connect(null, mapDispatchToProps)(SearchForm);
