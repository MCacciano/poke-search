import styled from 'styled-components';

export const PokemonUl = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  list-style: none;
`;
