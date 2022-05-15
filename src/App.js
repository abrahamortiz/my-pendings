import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Button from './components/Button';
import Cards, { Card } from './components/Cards';
import Counter from './components/Counter';
import Form from './components/Form';
import { MainContainer, CardsContainer } from './App.styled';

const App = () => {
  const [pendings, setPendings] = useState([]);
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addPending = (pending) => {
    const isDuplicated =
      pendings.filter((pend) => pend.text === pending.text).length > 0;

    if (isDuplicated) {
      alert('Duplicated description, please enter a new text');
    } else {
      let newPending = { ...pending, id };
      setPendings((pendings) => [newPending, ...pendings]);

      if (pending.status === 'Active') {
        setCards((cards) => [newPending, ...cards]);
      }

      setId((currentId) => currentId + 1);
      setIsFormVisible(false);
    }
  };

  const removePending = (id) => {
    setPendings(updatePending(id, 'Deleted'));
    removeCard(id);
  };

  const completePending = (id) => {
    setPendings(updatePending(id, 'Done'));
    removeCard(id);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const updatePending = (id, status) => {
    return pendings.map((pending) => {
      if (pending.id === id) {
        return { ...pending, status };
      } else {
        return { ...pending };
      }
    });
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const moveCard = (dragIndex, hoverIndex) => {
    const draggedCard = cards[dragIndex];

    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedCard],
        ],
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <MainContainer>
        <h2>My pendings</h2>

        <CardsContainer>
          <Card type='action'>
            {isFormVisible && <Form onSubmit={addPending} />}
            {!isFormVisible && <Button onClick={showForm}>Add pending</Button>}
          </Card>

          <Cards
            cards={cards}
            removePending={removePending}
            completePending={completePending}
            moveCard={moveCard}
          />
        </CardsContainer>

        <Counter pendings={pendings} />
      </MainContainer>
    </DndProvider>
  );
};

App.propTypes = {};

export default App;
