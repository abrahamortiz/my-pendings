import styled from 'styled-components';

const LabelStyled = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

const SelectStyled = styled.select`
  margin: 0px 8px;
`;

const TextareaStyled = styled.textarea`
  width: 100%;
`;

const InputStyled = styled.input`
  background-color: #3f51b5;
  border: 0px;
  border-radius: 4px 4px;
  box-shadow: 1px 1px 2px rgba(60, 60, 60, 0.75);
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  height: 20px;
  margin-top: 20px;
  width: 100%;

  :hover {
    background-color: #3949a3;
  }

  :disabled {
    background-color: #0000001f;
    color: #00000042;
  }
`;

export { LabelStyled, SelectStyled, TextareaStyled, InputStyled };
