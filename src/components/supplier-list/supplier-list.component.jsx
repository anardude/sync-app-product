import React, { useContext, useState } from 'react';

import { SupplierContext } from '../../providers/suppliers/supplier.provider';
import SupplierLineEdit from '../supplier-line-edit/supplier-line-edit.component';
import SupplierLine from '../supplier-line/supplier-line.component';

import './supplier-list.styles.scss';

const SupplierList = () => {
    const { suppliers, onLineEdit } = useContext(SupplierContext);

    const [newLineEdit, setNewLineEdit] = useState(false);

    const handleNewClick = () => {
        setNewLineEdit(!newLineEdit);
    }

    return (
        <div className='supplier-list'>
            <div className='title'>
                Liste des fournisseurs
            </div>
            <div className='content'>
                <div className='table-title'>
                    <span className='element'>Code</span>
                    <span className='element'>Nom</span>
                    <span className='element'>Base Url</span>
                    <span className='element'>Action</span>
                </div>
                {suppliers && suppliers.length > 0 && suppliers.map((supplier, idx) => {
                    return (
                        onLineEdit === supplier.id ?
                            <SupplierLineEdit key={supplier.id} supplier={supplier} />
                        : 
                            <SupplierLine key={supplier.id} supplier={supplier} />
                    )
                })}
                { 
                    newLineEdit ? 
                        <SupplierLineEdit />
                    :
                        <div className='new'>
                            <span onClick={handleNewClick} className='element' alt='Nouveau Fournisseur' title='Nouveau Fournisseur'>&#10010;</span>
                        </div>
                }
                
            </div>
            
        </div>
    );
}

export default SupplierList;
