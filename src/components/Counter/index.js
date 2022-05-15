import React from 'react';
import PropTypes from 'prop-types';
import { CounterContainer, CounterActive, CounterDone } from './styled';

const Counter = ({ pendings }) => {
  let active = 0;
  let done = 0;

  for (const pending of pendings) {
    switch (pending.status) {
      case 'Active':
        active += 1;
        break;
      case 'Done':
        done += 1;
        break;
      default:
        break;
    }
  }

  return (
    <CounterContainer>
      <CounterActive>Active: {active}</CounterActive>
      <CounterDone>Done: {done}</CounterDone>
    </CounterContainer>
  );
};

Counter.propTypes = {
  pendings: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
    })
  ),
};

export default Counter;
