import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// components
import Preloader from '../../components/preloader/preloader.component';

const PokemonDetailsPage = props => {
  console.log(props);

  // if (!state.details) return <Preloader />;

  // console.log(state);

  return (
    <div style={{ color: '#fff' }}>
      <h2>details page</h2>
      {/* <p>{state.details.name}</p> */}
    </div>
  );
};

PokemonDetailsPage.propTypes = {
  details: PropTypes.object
};

export default PokemonDetailsPage;
