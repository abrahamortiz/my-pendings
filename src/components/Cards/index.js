import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import Button from '../Button';
import {
  CardContainer,
  TextContainer,
  MetadataContainer,
  ButtonsContainer,
} from './styled';

const elementType = 'Card';

export const Card = ({
  type,
  id,
  index,
  priority,
  text,
  dueDate,
  onRemove,
  onComplete,
  moveCard,
  children,
  isAlmostExpired,
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
    <CardContainer ref={ref} isAlmostExpired={isAlmostExpired}>
      {type === 'data' && (
        <>
          <TextContainer>{text}</TextContainer>
          <MetadataContainer>{priority} priority</MetadataContainer>
          {dueDate && (
            <MetadataContainer>Due date: {dueDate}</MetadataContainer>
          )}

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
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);
  start.setHours(0, 0, 0);
  end.setDate(today.getDate() + 1);
  end.setHours(23, 59, 59);

  const renderCard = (card, index) => {
    const dueDate = new Date(card.dueDate);

    const isAlmostExpired =
      dueDate.getTime() >= start.getTime() &&
      dueDate.getTime() <= end.getTime();

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
        isAlmostExpired={isAlmostExpired}
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
