import React, { createContext, useState } from 'react';

export const SupplierContext = createContext({
    suppliers: {},
    onLineEdit: '',
    updateSuppliers: () => {},
    addSupplier: () => {},
    editSupplier: () => {},
    deleteSupplier: () => {},
    toggleLineEdit: () => {}
 });

export const SupplierProvider = ({ children }) => {
    const suppliersData = [
        { id: 1, code: 'pronatura', name: 'ProNatura', baseUrl: '' },
        { id: 2, code: 'provincebio', name: 'Province Bio', baseUrl: '' }
    ];

    const [suppliers, setSuppliers] = useState(suppliersData);
    const [onLineEdit, setLineEdit] = useState();

    const updateSuppliers = (data) => {
        setSuppliers(data);
    };

    const addSupplier = (supplier) => setSuppliers(suppliersData.push(supplier));

    const editSupplier = (supplier) => setSuppliers(suppliersData.map((item) => item.id === supplier.id ? supplier : item));

    const deleteSupplier = (supplier) => setSuppliers(suppliersData.filter((item) => item.id !== supplier.id));

    const toggleLineEdit = (id='') => {
      setLineEdit(onLineEdit ? '' : id);
    }
    
    return (
      <SupplierContext.Provider
        value={{
            suppliers,
            onLineEdit,
            updateSuppliers,
            addSupplier,
            editSupplier,
            deleteSupplier,
            toggleLineEdit
        }}
      >
        {children}
      </SupplierContext.Provider>
    );
  };
  
  export default SupplierProvider;