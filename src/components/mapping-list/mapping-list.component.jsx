import React from 'react';

import { MappingContext } from '../../providers/suppliers/supplier.provider';
import ListList from '../list-list/list-list.component';

import './mapping-list.styles.scss';

const MappingList = () => {
  return (
    <div className='mapping-list'>
      <ListList mainTitle='Mappings' context={MappingContext} />
    </div>
  );
};

export default MappingList;
