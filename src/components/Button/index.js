import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styled';

const Button = ({ variant, children, ...props }) => {
  let color;
  let hoverColor;

  switch (variant) {
    case 'warn':
      color = '#F44336';
      hoverColor = '#F2291A';
      break;
    case 'primary':
      color = '#3F51B5';
      hoverColor = '#3949A3';
      break;
    default:
      color = '#3F51B5';
      hoverColor = '#3949A3';
      break;
  }

  return (
    <ButtonStyled backgroundColor={color} hoverColor={hoverColor} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'warn']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
