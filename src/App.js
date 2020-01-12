import React, { Fragment } from 'react';

// components
import PokemonUl from './components/pokemon-list/pokemon-list.component';

// redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div>
          <h1>PokeSearch</h1>
          <PokemonUl />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
