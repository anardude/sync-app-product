import React, { useContext } from 'react';

import { SupplierContext } from '../../providers/suppliers/supplier.provider';

import './supplier-line.styles.scss';

const SupplierLine = ({supplier}) => {
    const { deleteSupplier, toggleLineEdit } = useContext(SupplierContext);

    const handleDeleteClick = () => {
        window.confirm(`Supprimer le fournisseur ${supplier.name} ? cela est irréversible et effacera toutes les données lieées`) && deleteSupplier(supplier);
    }

    const handleEditClick = () => {
        toggleLineEdit(supplier.id);
    }

    return (
        <div className='row'>
            <span className='element'>{supplier.code}</span>
            <span className='element'>{supplier.name}</span>
            <span className='element'>{supplier.baseUrl}</span>
            <span className='element'>
                <span onClick={() => handleEditClick()} alt='Editer' title='Editer' className='actions'>&#9998;</span>
                <span onClick={() => handleDeleteClick()} alt='Supprimer' title='Supprimer' className='actions'>&#10006;</span>
            </span>
        </div>
    );
}

export default SupplierLine;
