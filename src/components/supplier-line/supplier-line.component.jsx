import React, { useContext } from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';
import { MappingContext } from '../../providers/mapping/mapping.provider';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';

import './supplier-line.styles.scss';

const SupplierLine = ({ fields, line }) => {
  const { deleteLine, toggleLineEdit } = useContext(SupplierContext);
  const { getLineById } = useContext(MappingContext);

  const handleDeleteClick = () => {
    window.confirm(
      `Supprimer ${line.name} ? cela est irréversible et effacera toutes les données lieées`
    ) && deleteLine(line);
  };

  const handleEditClick = () => {
    toggleLineEdit(line.id);
  };

  return (
    <div className='row'>
      {line &&
        fields.map((field, idx) => {
          let newField;
          if (field.name === 'mapping') {
            const objMapping = getLineById(line[field.name]);
            newField = (objMapping && objMapping.name) || '';
          } else {
            newField = line[field.name];
          }
          return <SpanElement key={idx}>{newField}</SpanElement>;
        })}
      <SpanElement>
        <IconButton
          icon='&#9998;'
          onClick={() => handleEditClick()}
          title='Editer'
        />
        <IconButton
          icon='&#10006;'
          onClick={() => handleDeleteClick()}
          title='Supprimer'
        />
      </SpanElement>
    </div>
  );
};

export default SupplierLine;
