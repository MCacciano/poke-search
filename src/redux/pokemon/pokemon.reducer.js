import initialState from './pokemon.state';
import { GET_POKEMON } from '../types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        results: payload
      };
    default:
      return state;
  }
};
