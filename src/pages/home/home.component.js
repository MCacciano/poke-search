import React from 'react';

import { homeBgContainer, homeBg, overlay } from './home.module.scss';

const HomePage = () => {
  return (
    <div className={homeBgContainer}>
      <div className={homeBg}></div>
      <div className={overlay}></div>
    </div>
  );
};

export default HomePage;
