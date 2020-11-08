import React, { useContext, useState } from 'react';

import { MappingContext } from '../../providers/mapping/mapping.provider';
import { ImportContext } from '../../providers/import/import.provider';
import CustomSelect from '../custom-select/custom-select.component';
import MappingList from '../mapping-list/mapping-list.component';
import CustomModal from '../custom-modal/custom-modal.component';

import './mapping-select.styles.scss';

const MappingSelect = () => {
  const { lines } = useContext(MappingContext);
  const { currentMapping, handleMappingChange } = useContext(ImportContext);

  const [hiddenPop, setHiddenPop] = useState(false);

  const handleChange = value => {
    handleMappingChange(lines.find(line => line.id == value));
  };

  const togglePop = () => {
    setHiddenPop(!hiddenPop);
  };

  const selectMap = () => {
    return lines.map(line => {
      return { value: line.id, label: line.name };
    });
  };

  return (
    <div className='mapping-select'>
      <CustomSelect
        options={selectMap()}
        defaultValue={currentMapping.id}
        onChange={handleChange}
        label='Mappings'
      />
      <span alt='Editer' title='Editer' className='icon' onClick={togglePop}>
        &#9776;
      </span>
      {hiddenPop ? (
        <CustomModal toggle={togglePop}>
          <MappingList />
        </CustomModal>
      ) : null}
    </div>
  );
};

export default MappingSelect;
