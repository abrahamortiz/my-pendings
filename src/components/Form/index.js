import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  LabelStyled,
  SelectStyled,
  TextareaStyled,
  InputStyled,
} from './styled';

const Form = ({ onSubmit }) => {
  const [priority, setPriority] = useState('Medium');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Active');
  const [dueDate, setDueDate] = useState('');

  const handleInputChange = (e) => {
    const {
      target: { name, value },
    } = e;

    switch (name) {
      case 'priority':
        setPriority(value);
        break;
      case 'text':
        setText(value);
        break;
      case 'status':
        setStatus(value);
        break;
      case 'dueDate':
        setDueDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ priority, text, status, dueDate });
      clearInputs();
    }
  };

  const clearInputs = () => {
    setPriority('Medium');
    setText('');
    setStatus('Active');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelStyled>
        Priority:
        <SelectStyled
          value={priority}
          name='priority'
          onChange={handleInputChange}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </SelectStyled>
      </LabelStyled>

      <br />

      <LabelStyled>
        Text:
        <TextareaStyled
          type='text'
          value={text}
          name='text'
          onChange={handleInputChange}
          required
        />
      </LabelStyled>

      <br />

      <LabelStyled>
        Status:
        <SelectStyled value={status} name='status' onChange={handleInputChange}>
          <option value='Active'>Active</option>
          <option value='Done'>Done</option>
        </SelectStyled>
      </LabelStyled>

      <br />

      <LabelStyled>
        Due date:
        <input
          type='datetime-local'
          value={dueDate}
          name='dueDate'
          onChange={handleInputChange}
        />
      </LabelStyled>

      <br />

      <InputStyled type='submit' value='Add' disabled={!text} />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: null,
};

export default Form;
