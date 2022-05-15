import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import Button from '../Button';
import {
  CardContainer,
  TextContainer,
  PriorityContainer,
  ButtonsContainer,
} from './styled';

const elementType = 'Card';

export const Card = ({
  type,
  id,
  index,
  priority,
  text,
  onRemove,
  onComplete,
  moveCard,
  children,
}) => {
  const ref = useRef(null);

  const handleRemove = () => {
    if (onRemove) onRemove(id);
  };

  const handleComplete = () => {
    if (onComplete) onComplete(id);
  };

  const [, drop] = useDrop({
    accept: elementType,
    hover(item) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag(() => ({
    type: elementType,
    item: { id, index },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  drag(drop(ref));

  return (
    <CardContainer ref={ref}>
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

const Cards = ({ cards, moveCard, removePending, completePending }) => {
  const renderCard = (card, index) => {
    return card ? (
      <Card
        key={card.id}
        id={card.id}
        index={index}
        priority={card.priority}
        text={card.text}
        dueDate={card.dueDate}
        onRemove={removePending}
        onComplete={completePending}
        moveCard={moveCard}
      />
    ) : null;
  };

  return <>{cards.map(renderCard)}</>;
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

export default Cards;
