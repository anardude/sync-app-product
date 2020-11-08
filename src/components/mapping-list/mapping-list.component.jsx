import React from 'react';

import { MappingContext } from '../../providers/mapping/mapping.provider';
import ListList from '../list-list/list-list.component';

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
  return (
    <div className='mapping-list'>
      <ListList mainTitle='Mappings' fields={fields} context={MappingContext} />
    </div>
  );
};

export default MappingList;
