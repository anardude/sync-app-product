import React, { useContext, useState, useRef } from 'react';

import { MappingContext } from '../../providers/mapping/mapping.provider';
import CustomInput from '../custom-input/custom-input.component';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';

import './mapping-line-edit.styles.scss';

const MappingLineEdit = ({ fields, line }) => {
  const { editLine, addLine, toggleLineEdit, onLineEdit } = useContext(
    MappingContext
  );

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

export default MappingLineEdit;
