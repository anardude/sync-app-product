import React, { useContext } from 'react';

import SpanElement from '../span-element/span-element.component';
import CustomSelect from '../custom-select/custom-select.component';

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

  // const newFields = fields.map(field => {
  //   if (field.type === 'select')
  //     field.type = (
  //       <CustomSelect
  //         options={line[field.name].options}
  //         defaultValue={line[field.name].id}
  //       />
  //     );
  // });

  return (
    <div className='row'>
      {line &&
        fields.map((field, idx) => {
          const name = Array.isArray(line[field.name])
            ? line[field.name].toString()
            : line[field.name];
          return <SpanElement key={idx}>{name}</SpanElement>;
        })}
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
