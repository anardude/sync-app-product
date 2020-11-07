import React, { useContext } from 'react';

import ListLineEdit from '../list-line-edit/list-line-edit.component';
import ListLine from '../list-line/list-line.component';
import SpanElement from '../span-element/span-element.component';

import './list-list.styles.scss';

const ListList = ({ mainTitle, fields, context }) => {
  const { lines, onLineEdit, toggleLineEdit } = useContext(context);

  const handleNewClick = () => {
    toggleLineEdit('new');
  };

  return (
    <div className='list-list'>
      <div className='title'>{mainTitle}</div>
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
              <ListLineEdit
                key={idx}
                fields={fields}
                line={line}
                context={context}
              />
            ) : (
              <ListLine
                key={idx}
                fields={fields}
                line={line}
                context={context}
              />
            );
          })}
        {onLineEdit === 'new' ? (
          <ListLineEdit fields={fields} context={context} />
        ) : (
          <div className='new'>
            <span
              onClick={handleNewClick}
              className='element'
              alt='Nouveau'
              title='Nouveau'
            >
              &#10010;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListList;
