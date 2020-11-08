import React, { useContext } from 'react';

import { MappingContext } from '../../providers/mapping/mapping.provider';
import MappingLine from '../mapping-line/mapping-line.component';
import MappingLineEdit from '../mapping-line-edit/mapping-line-edit.component';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';

import './mapping-list.styles.scss';

const MappingList = () => {
  const fields = [
    {
      name: 'name',
      title: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      title: 'Type',
      type: 'text',
      required: true,
    },
    {
      name: 'fields',
      title: 'Champs',
      type: 'array',
      required: true,
    },
  ];

  const { lines, onLineEdit, toggleLineEdit } = useContext(MappingContext);

  const handleNewClick = () => {
    toggleLineEdit('new');
  };

  return (
    <div className='mapping-list'>
      <div className='title'>Mappings</div>
      <div className='content'>
        <div className='table-title'>
          {fields.map((field, idx) => (
            <SpanElement key={idx}>{field.title}</SpanElement>
          ))}
          <SpanElement>Actions</SpanElement>
        </div>
        {lines &&
          lines.length > 0 &&
          lines.map((line, idx) => {
            return line.id && onLineEdit === line.id ? (
              <MappingLineEdit key={idx} fields={fields} line={line} />
            ) : (
              <MappingLine key={idx} fields={fields} line={line} />
            );
          })}
        {onLineEdit === 'new' ? (
          <MappingLineEdit fields={fields} />
        ) : (
          <div className='new'>
            <SpanElement>
              <IconButton
                icon='&#10010;'
                title='Nouveau'
                onClick={handleNewClick}
              />
            </SpanElement>
          </div>
        )}
      </div>
    </div>
  );
};

export default MappingList;
