import React from 'react';

// components
import PokemonList from '../../components/pokemon-list/pokemon-list.component';

import { homePage } from './home.module.scss';

const HomePage = () => {
  return (
    <div className={homePage}>
      <PokemonList />
    </div>
  );
};

export default HomePage;
