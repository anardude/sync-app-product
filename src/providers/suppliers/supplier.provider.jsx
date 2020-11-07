import React, { createContext, useState, useEffect } from 'react';

export const SupplierContext = createContext({
  suppliers: {},
  onLineEdit: '',
  addSupplier: () => {},
  editSupplier: () => {},
  deleteSupplier: () => {},
  toggleLineEdit: () => {},
});

export const SupplierProvider = ({ children }) => {
  //localStorage.clear();
  const localSuppliers = JSON.parse(localStorage.getItem('suppliers'));
  //console.log(localSuppliers);

  const [suppliers, setSuppliers] = useState(localSuppliers || []);
  const [onLineEdit, setLineEdit] = useState();

  const addSupplier = supplier => {
    supplier.id = suppliers.length + 1;
    setSuppliers([...suppliers, supplier]);
  };

  const editSupplier = supplier => {
    setSuppliers(
      suppliers.map(item => (item.id === supplier.id ? supplier : item))
    );
  };

  const deleteSupplier = supplier => {
    setSuppliers(suppliers.filter(item => item.id !== supplier.id));
  };

  const toggleLineEdit = (id = '') => setLineEdit(onLineEdit ? '' : id);

  useEffect(() => {
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
  }, [suppliers]);

  return (
    <SupplierContext.Provider
      value={{
        suppliers,
        onLineEdit,
        addSupplier,
        editSupplier,
        deleteSupplier,
        toggleLineEdit,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export default SupplierProvider;
