import initialState from './pokemon.state';
import { GET_POKEMON, GET_POKEMON_DETAILS } from '../types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        results: payload
      };
    case GET_POKEMON_DETAILS:
      return {
        ...state,
        details: payload
      };
    default:
      return state;
  }
};
