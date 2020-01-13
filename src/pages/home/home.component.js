import React from 'react';

import { homePage, homeBgContainer, homeBg, overlay } from './home.module.scss';

const HomePage = () => {
  return (
    <div className={homePage}>
      <div className={homeBgContainer}>
        <div className={homeBg}></div>
        <div className={overlay}></div>
      </div>
    </div>
  );
};

export default HomePage;
