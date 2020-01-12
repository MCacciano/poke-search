import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div class="nav-wrapper red accent-4">
        <a href="#" class="brand-logo" style={{ paddingLeft: '1rem' }}>
          PokeSearch
        </a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
