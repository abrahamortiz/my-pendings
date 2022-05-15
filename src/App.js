import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';
import Form from './components/Form';
import { MainContainer, CardsContainer } from './App.styled';

const App = () => {
  const [pendings, setPendings] = useState([]);
  const [id, setId] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addPending = (pending) => {
    let newPending = { ...pending, id };
    setPendings((pendings) => [...pendings, newPending]);
    setId((currentId) => currentId + 1);
    setIsFormVisible(false);
  };

  const removePending = (id) => {
    setPendings(updatePending(id, 'Deleted'));
  };

  const completePending = (id) => {
    setPendings(updatePending(id, 'Done'));
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

  return (
    <MainContainer>
      <h2>My pendings</h2>

      <CardsContainer>
        <Card type='action'>
          {isFormVisible && <Form onSubmit={addPending} />}
          {!isFormVisible && <Button onClick={showForm}>Add pending</Button>}
        </Card>

        {pendings.map(
          ({ id, priority, text, status, dueDate }) =>
            status === 'Active' && (
              <Card
                key={id}
                id={id}
                priority={priority}
                text={text}
                dueDate={dueDate}
                onRemove={removePending}
                onComplete={completePending}
              />
            )
        )}
      </CardsContainer>

      <Counter pendings={pendings} />
    </MainContainer>
  );
};

App.propTypes = {};

export default App;
