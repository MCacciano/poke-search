import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../search-form/search-form.component';

import {
  nav,
  navLogoContainer,
  navLogoImg,
  navLogo,
  navList,
  navListItem,
  navLink,
  linkOverlay
} from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <div className={nav}>
        <div className={navLogoContainer}>
          <img
            className={navLogoImg}
            src="/images/pokeball-2.jpg"
            alt="pokeball"
          />
          <h2>
            <Link to="/" className={navLogo}>
              PokeSearch
            </Link>
          </h2>
        </div>
        <SearchForm />
        <ul className={navList}>
          <li className={navListItem}>
            <span className={linkOverlay}></span>
            <Link className={navLink} to="/">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
