import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0px;
  border-radius: 4px 4px;
  box-shadow: 1px 1px 2px rgba(60, 60, 60, 0.75);
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  height: 20px;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

export { ButtonStyled };
