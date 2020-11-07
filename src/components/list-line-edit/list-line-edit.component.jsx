import React, { useContext, useState, useRef } from 'react';

import CustomInput from '../custom-input/custom-input.component';
import SpanElement from '../span-element/span-element.component';

import './list-line-edit.styles.scss';

const ListLineEdit = ({ fields, line, context }) => {
  const { editLine, addLine, toggleLineEdit, onLineEdit } = useContext(context);

  const [localLine, setLocalLine] = useState();

  const inputRef = useRef([]);

  const validFields = () => {
    let isValid = true;
    inputRef.current
      .filter(field => field.required)
      .forEach(field => {
        if (!field.value) {
          field.className = 'red';
          isValid = false;
        } else field.className = '';
      });
    return isValid;
  };

  const handleValidClick = () => {
    if (validFields()) {
      if (onLineEdit === 'new') {
        addLine(localLine);
      } else {
        editLine({ ...line, ...localLine });
      }
      toggleLineEdit();
    }
  };

  const handleChange = e => {
    e.target.className = '';
    setLocalLine({
      ...localLine,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='row'>
      {fields.map((field, idx) => {
        return (
          <SpanElement key={idx}>
            <CustomInput
              reff={el => (inputRef.current[idx] = el)}
              type='text'
              name={field.name}
              className=''
              value={
                (localLine && localLine[field.name]) ||
                (line && line[field.name]) ||
                ''
              }
              onChange={handleChange}
              required={field.required}
            />
          </SpanElement>
        );
      })}
      <SpanElement>
        <span
          onClick={handleValidClick}
          alt='Valider'
          title='Valider'
          className='actions'
        >
          &#10004;
        </span>
        <span
          onClick={toggleLineEdit}
          alt='Annuler'
          title='Annuler'
          className='actions'
        >
          &#10007;
        </span>
      </SpanElement>
    </div>
  );
};

export default ListLineEdit;
