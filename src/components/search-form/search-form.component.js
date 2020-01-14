import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import {
  getAllPokemon,
  getPokemonDetails
} from '../../redux/pokemon/pokemon.actions';

// styles
import { searchForm, searchText, submitBtn } from './search-form.module.scss';

const SearchForm = ({ getAllPokemon, getPokemonDetails, details }) => {
  const [name, setName] = useState('');
  let history = useHistory();

  const onSearchSubmit = e => {
    e.preventDefault();

    if (!name) {
      getAllPokemon();
      history.push('/');
    } else {
      getPokemonDetails(name);
      // we just push to the url with the pokemon because the details are called in the pokemon-details component
      history.push(`/pokemon/${name}`);
      setName('');
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
        value={name}
        placeholder="Search for a pokemon"
      />
      <input className={submitBtn} type="submit" value="Search" />
    </form>
  );
};

SearchForm.propTypes = {
  getAllPokemon: PropTypes.func.isRequired,
  getPokemonDetails: PropTypes.func.isRequired,
  details: PropTypes.object
};

const mapStateToProps = ({ pokemon }) => ({
  details: pokemon.details
});

const mapDispatchToProps = dispatch => ({
  getAllPokemon: () => dispatch(getAllPokemon()),
  getPokemonDetails: name => dispatch(getPokemonDetails(name))
});

export default connect(null, mapDispatchToProps)(SearchForm);
