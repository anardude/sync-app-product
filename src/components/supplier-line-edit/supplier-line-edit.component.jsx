import React, { useContext, useState } from 'react';

import { SupplierContext } from '../../providers/suppliers/supplier.provider';

import './supplier-line-edit.styles.scss';

const SupplierLineEdit = ({supplier = {code:'', name:'', baseUrl:''}}) => {
    const { editSupplier, toggleLineEdit } = useContext(SupplierContext);

    const [localSupplier, editLocalSupplier] = useState();

    const handleValidClick = () => {
        editSupplier({
            ...supplier,
            ...localSupplier
        });
        toggleLineEdit();
    }

    const handleChange = (e) => {
        editLocalSupplier(
            {
                ...localSupplier,
                [e.target.name]: e.target.value
            }
        );
    }

    return (
        <div className='row'>
            <span className='element'><input type='text' name='code' value={(localSupplier && localSupplier.code)  || supplier.code} onChange={handleChange} /></span>
            <span className='element'><input type='text' name='name' value={(localSupplier && localSupplier.name) || supplier.name} onChange={handleChange}/></span>
            <span className='element'><input type='text' name='baseUrl' value={(localSupplier && localSupplier.baseUrl) || supplier.baseUrl} onChange={(e) => handleChange(e)} /></span>
            <span className='element'>
                <span onClick={() => handleValidClick(supplier)} alt='Valider' title='Valider' className='actions'>&#10004;</span>
                <span onClick={() => toggleLineEdit()} alt='Annuler' title='Annuler' className='actions'>&#10007;</span>
            </span>
        </div>
    );
}

export default SupplierLineEdit;
