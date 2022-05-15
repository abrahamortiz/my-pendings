import styled from 'styled-components';

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  width: 100vw;
`;

const CardsContainer = styled.div`
  align-items: center;
  background-color: #43ed3f;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-height: 80%;
  min-height: 80%;
  overflow-y: auto;
  width: 90%;
`;

export { MainContainer, CardsContainer };
