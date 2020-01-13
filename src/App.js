import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import HomePage from './pages/home/home.component';
import PokemonDetailsPage from './pages/pokemon-details/pokemon-details.component';

// components
import Navigation from './components/navigation/navigation.component';

// redux
import { Provider } from 'react-redux';
import store from './store';

import { siteBackground } from './App.module.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className={siteBackground}>
            <Navigation />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pokemon/:name" component={PokemonDetailsPage} />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
