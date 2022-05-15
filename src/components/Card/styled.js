import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  box-shadow: 5px 5px 15px rgba(60, 60, 60, 0.75);
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  margin: 20px;
  padding: 15px;
  position: relative;
  width: 150px;
`;

const TextContainer = styled.div`
  font-size: 24px;
  max-height: 110px;
  overflow-y: auto;
`;

const PriorityContainer = styled.div`
  color: grey;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  margin: 2px;
  max-height: 10%;
`;

const ButtonsContainer = styled.div`
  bottom: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  max-height: 15%;
  position: absolute;
  width: 80%;
`;

export { CardContainer, TextContainer, PriorityContainer, ButtonsContainer };
