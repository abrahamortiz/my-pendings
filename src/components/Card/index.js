import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  CardContainer,
  TextContainer,
  PriorityContainer,
  ButtonsContainer,
} from './styled';

const Card = ({ type, id, priority, text, onRemove, onComplete, children }) => {
  const handleRemove = () => {
    if (onRemove) onRemove(id);
  };

  const handleComplete = () => {
    if (onComplete) onComplete(id);
  };

  return (
    <CardContainer>
      {type === 'data' && (
        <>
          <TextContainer>{text}</TextContainer>
          <PriorityContainer>{priority} priority</PriorityContainer>

          <ButtonsContainer>
            <Button variant='warn' onClick={handleRemove}>
              Remove
            </Button>

            <Button onClick={handleComplete}>Complete</Button>
          </ButtonsContainer>
        </>
      )}

      {type === 'action' && children}
    </CardContainer>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['data', 'action']),
  id: PropTypes.number,
  priority: PropTypes.oneOf(['Low', 'Medium', 'High']),
  text: PropTypes.string,
  onRemove: PropTypes.func,
  onComplete: PropTypes.func,
};

Card.defaultProps = {
  type: 'data',
  id: null,
  priority: null,
  text: null,
  onRemove: null,
  onComplete: null,
};

export default Card;
