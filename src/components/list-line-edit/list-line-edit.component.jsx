import React, { useContext, useState, useRef } from 'react';

import CustomInput from '../custom-input/custom-input.component';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';

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

  const fieldValue = fieldName =>
    (localLine && localLine[fieldName]) || (line && line[fieldName]);

  return (
    <div className='row'>
      {fields.map((field, idx) => {
        const name = Array.isArray(field.name)
          ? field.name.toString()
          : field.name;
        return (
          <SpanElement key={idx}>
            <CustomInput
              reff={el => (inputRef.current[idx] = el)}
              type={field.type}
              name={name}
              className=''
              defaultValue={fieldValue(field.name)}
              onChange={handleChange}
              required={field.required}
            />
          </SpanElement>
        );
      })}
      <SpanElement>
        <IconButton
          icon='&#10004;'
          onClick={handleValidClick}
          title='Valider'
        />
        <IconButton icon='&#10007;' onClick={toggleLineEdit} title='Annuler' />
      </SpanElement>
    </div>
  );
};

export default ListLineEdit;
