import React, { useContext, useState, useRef } from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';
import { MappingContext } from '../../providers/mapping/mapping.provider';
import CustomInput from '../custom-input/custom-input.component';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';
import CustomSelect from '../custom-select/custom-select.component';

import './supplier-line-edit.styles.scss';

const SupplierLineEdit = ({ fields, line }) => {
  const { editLine, addLine, toggleLineEdit, onLineEdit } = useContext(
    SupplierContext
  );
  const { lines: mappings } = useContext(MappingContext);

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

  const selectMap = () => {
    return mappings.map(line => {
      return { value: line.id, label: line.name };
    });
  };

  return (
    <div className='row'>
      {fields.map((field, idx) => {
        let newField;
        field.name === 'mapping'
          ? (newField = (
              <CustomSelect
                options={selectMap()}
                defaultValue={(line && line.mapping) || 'DEFAULT'}
                onChange={handleChange}
                name={field.name}
              />
            ))
          : (newField = (
              <CustomInput
                reff={el => (inputRef.current[idx] = el)}
                type={field.type}
                name={field.name}
                defaultValue={fieldValue(field.name)}
                onChange={handleChange}
                required={field.required}
              />
            ));
        return <SpanElement key={idx}>{newField}</SpanElement>;
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

export default SupplierLineEdit;
