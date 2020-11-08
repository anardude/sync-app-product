import React from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';
import ListList from '../list-list/list-list.component';

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

  return (
    <div className='supplier-list'>
      <ListList
        fields={fields}
        mainTitle='Fournisseurs'
        context={SupplierContext}
      />
    </div>
  );
};

export default SupplierList;
