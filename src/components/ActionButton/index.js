import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import icons from './icons';

const propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired
};

function ActionButton({icon}) {
  const iconInfo = icons[icon];
  const IconComponent = iconInfo.family;

  return (
    <Container style={{
      backgroundColor: iconInfo.backgroundColor
    }}>
      <IconComponent
        name={iconInfo.name}
        color={iconInfo.color}
        size={iconInfo.size}
      />
    </Container>
  );
}

ActionButton.propTypes = propTypes;
export default ActionButton;
