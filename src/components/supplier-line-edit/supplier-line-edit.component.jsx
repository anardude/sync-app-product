import React, { useContext, useState, useRef } from 'react';

import { SupplierContext } from '../../providers/suppliers/supplier.provider';

//import useDidMountEffect from '../../custom-hooks/use-did-mount-effect.component';

import './supplier-line-edit.styles.scss';

const SupplierLineEdit = ({
  supplier = { code: '', name: '', baseUrl: '' },
}) => {
  const { editSupplier, addSupplier, toggleLineEdit, onLineEdit } = useContext(
    SupplierContext
  );

  const [localSupplier, setLocalSupplier] = useState();

  const inputCode = useRef('');
  const inputName = useRef('');

  const isValidField = field => {
    if (field.current.required && !field.current.value) {
      field.current.className = 'red';
      return false;
    } else {
      field.current.className = '';
      return true;
    }
  };

  const validFields = () => {
    let isValid = true;
    if (!isValidField(inputCode)) isValid = false;
    if (!isValidField(inputName)) isValid = false;
    return isValid;
  };

  const handleValidClick = () => {
    if (validFields()) {
      if (onLineEdit === 'new') {
        localSupplier &&
          localSupplier.code &&
          localSupplier.name &&
          addSupplier(localSupplier);
      } else {
        editSupplier({ ...supplier, ...localSupplier });
      }
      toggleLineEdit();
    }
  };

  const handleChange = e => {
    e.target.className = '';
    setLocalSupplier({
      ...localSupplier,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='row'>
      <span className='element'>
        <input
          ref={inputCode}
          required
          className=''
          type='text'
          name='code'
          value={(localSupplier && localSupplier.code) || supplier.code}
          onChange={handleChange}
        />
      </span>
      <span className='element'>
        <input
          required
          ref={inputName}
          type='text'
          name='name'
          value={(localSupplier && localSupplier.name) || supplier.name}
          onChange={handleChange}
        />
      </span>
      <span className='element'>
        <input
          type='text'
          name='baseUrl'
          value={(localSupplier && localSupplier.baseUrl) || supplier.baseUrl}
          onChange={handleChange}
        />
      </span>
      <span className='element'>
        <span
          onClick={handleValidClick}
          alt='Valider'
          title='Valider'
          className='actions'
        >
          &#10004;
        </span>
        <span
          onClick={toggleLineEdit}
          alt='Annuler'
          title='Annuler'
          className='actions'
        >
          &#10007;
        </span>
      </span>
    </div>
  );
};

export default SupplierLineEdit;
