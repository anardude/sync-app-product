import React, { useContext } from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';
import SupplierLineEdit from '../supplier-line-edit/supplier-line-edit.component';
import SupplierLine from '../supplier-line/supplier-line.component';
import SpanElement from '../span-element/span-element.component';
import IconButton from '../icon-button/icon-button.component';

import './supplier-list.styles.scss';

const SupplierList = () => {
  const fields = [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'baseUrl',
      title: 'Base Url',
      type: 'text',
      required: false,
    },
    {
      name: 'mapping',
      title: 'Mapping par defaut',
      type: 'select',
      required: false,
    },
  ];

  const { lines, onLineEdit, toggleLineEdit } = useContext(SupplierContext);

  const handleNewClick = () => {
    toggleLineEdit('new');
  };

  return (
    <div className='supplier-list'>
      <div className='title'>Fournisseurs</div>
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
              <SupplierLineEdit key={idx} fields={fields} line={line} />
            ) : (
              <SupplierLine key={idx} fields={fields} line={line} />
            );
          })}
        {onLineEdit === 'new' ? (
          <SupplierLineEdit fields={fields} />
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

export default SupplierList;
