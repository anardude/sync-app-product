import React, { useContext } from 'react';

import SpanElement from '../span-element/span-element.component';

import './list-line.styles.scss';

const ListLine = ({ fields, line, context }) => {
  const { deleteLine, toggleLineEdit } = useContext(context);

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
        fields.map((field, idx) => (
          <SpanElement key={idx}>{line[field.name]}</SpanElement>
        ))}
      <SpanElement>
        <span
          onClick={() => handleEditClick()}
          alt='Editer'
          title='Editer'
          className='actions'
        >
          &#9998;
        </span>
        <span
          onClick={() => handleDeleteClick()}
          alt='Supprimer'
          title='Supprimer'
          className='actions'
        >
          &#10006;
        </span>
      </SpanElement>
    </div>
  );
};

export default ListLine;
