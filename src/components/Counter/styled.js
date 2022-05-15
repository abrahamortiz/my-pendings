import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 16px;
  width: 90%;
`;

const CounterActive = styled.span`
  font-size: 20px;
`;

const CounterDone = styled.span`
  font-size: 20px;
  margin-left: 100px;
`;

export { CounterContainer, CounterActive, CounterDone };
