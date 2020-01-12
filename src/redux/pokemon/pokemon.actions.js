import pokeApi from '../../axios/pokeApi';
import { GET_POKEMON } from '../types';

// get all pokemon
export const getAllPokemon = () => async dispatch => {
  try {
    const res = await pokeApi.get('/pokemon');

    dispatch({
      type: GET_POKEMON,
      payload: res.data.results
    });
  } catch (err) {
    console.error(err);
  }
};
