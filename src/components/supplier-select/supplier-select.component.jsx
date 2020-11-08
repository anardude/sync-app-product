import React, { useContext, useState } from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';
import { ImportContext } from '../../providers/import/import.provider';
import CustomSelect from '../custom-select/custom-select.component';
import SupplierList from '../supplier-list/supplier-list.component';
import CustomModal from '../custom-modal/custom-modal.component';

import './supplier-select.styles.scss';

const SupplierSelect = () => {
  const { lines } = useContext(SupplierContext);
  const { handleSupplierChange } = useContext(ImportContext);

  const [hiddenPop, setHiddenPop] = useState(false);

  const handleChange = e => {
    handleSupplierChange(e.target.value);
  };

  const togglePop = () => {
    setHiddenPop(!hiddenPop);
  };

  const selectMap = () => {
    return lines.map(supplier => {
      return { value: supplier.id, label: supplier.name };
    });
  };

  return (
    <div className='supplier-select'>
      <CustomSelect
        options={selectMap()}
        onChange={handleChange}
        label='Fournisseurs'
      />
      <span alt='Editer' title='Editer' className='icon' onClick={togglePop}>
        &#9776;
      </span>
      {hiddenPop ? (
        <CustomModal toggle={togglePop}>
          <SupplierList />
        </CustomModal>
      ) : null}
    </div>
  );
};

export default SupplierSelect;
