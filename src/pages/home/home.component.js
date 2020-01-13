import React from 'react';

// components
import PokemonList from '../../components/pokemon-list/pokemon-list.component';

import { homePage, homeBgContainer, homeBg, overlay } from './home.module.scss';

const HomePage = () => {
  return (
    <div className={homePage}>
      <div className={homeBgContainer}>
        <div className={homeBg}></div>
        <div className={overlay}></div>
      </div>
      <PokemonList />
    </div>
  );
};

export default HomePage;
