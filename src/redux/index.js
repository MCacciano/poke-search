import { combineReducers } from 'redux';
import pokemonReducer from './pokemon/pokemon.reducer';

export default combineReducers({
  pokemon: pokemonReducer
});
