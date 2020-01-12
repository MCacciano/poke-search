import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import HomePage from './pages/home/home.component';
import Navigation from './components/navigation/navigation.component';

// redux
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <div className="container">
            <Route exact path="/" component={HomePage} />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
