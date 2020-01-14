import pokeApi from '../../axios/pokeApi';
import { GET_POKEMON, GET_POKEMON_DETAILS } from '../types';

// get all pokemon
export const getAllPokemon = (
  more = false,
  prev = 40,
  limit = 40
) => async dispatch => {
  try {
    let res;

    if (more) {
      const res = await pokeApi.get(`/pokemon?previous=${prev}&limit=${limit}`);
    } else {
      res = await pokeApi.get(`/pokemon?previous=${prev + 40}&limit=${limit}`);
    }

    dispatch({
      type: GET_POKEMON,
      payload: res.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

// get pokemon by name
export const getPokemonDetails = name => async dispatch => {
  try {
    const res = await pokeApi.get(`/pokemon/${name.toLowerCase()}`);

    console.log('from action', res.data);

    dispatch({
      type: GET_POKEMON_DETAILS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};
