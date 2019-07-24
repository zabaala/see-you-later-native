import React from 'react';
import PropTypes from 'prop-types';

import { Container, SeeAtLabel, SeeAt } from './style';

const propTypes = {
  date: PropTypes.string.isRequired
};

function CardSeeAt({ style, date }) {
  return (
    <Container style={style}>
      <SeeAtLabel>Acessar em</SeeAtLabel>
      <SeeAt>{date}</SeeAt>
    </Container>
  );
}

CardSeeAt.propTypes = propTypes;

export default CardSeeAt;
