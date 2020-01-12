import React from 'react';
import { Link } from 'react-router-dom';

import {
  nav,
  navLogo,
  navList,
  navListItem,
  navLink
} from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <div className={nav}>
        <h2>
          <Link to="/" className={navLogo}>
            PokeSearch
          </Link>
        </h2>

        <ul className={navList}>
          <li className={navListItem}>
            <Link className={navLink} to="/">
              Home
            </Link>
          </li>
          <li className={navListItem}>
            <Link className={navLink} to="/search">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
