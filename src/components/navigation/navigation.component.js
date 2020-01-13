import React from 'react';
import { Link } from 'react-router-dom';

import {
  nav,
  navLogoContainer,
  navLogoImg,
  navLogo,
  navList,
  navListItem,
  navLink,
  linkOverlay,
  searchForm,
  searchText,
  submitBtn
} from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <div className={nav}>
        <div className={navLogoContainer}>
          <img className={navLogoImg} src="/images/pokeball-2.jpg" />
          <h2>
            <Link to="/" className={navLogo}>
              PokeSearch
            </Link>
          </h2>
        </div>

        <form className={searchForm}>
          <input className={searchText} type="text" name="search" />
          <button className={submitBtn} type="button">
            Search
          </button>
        </form>

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
