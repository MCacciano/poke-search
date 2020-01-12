import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import HomePage from './pages/home/home.component';
import Navigation from './components/navigation/navigation.component';

// redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path="/" component={HomePage} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
