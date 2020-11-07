import React, { createContext, useState, useEffect } from 'react';

export const SupplierContext = createContext({
  lines: {},
  onLineEdit: '',
  addLine: () => {},
  editLine: () => {},
  deleteLine: () => {},
  toggleLineEdit: () => {},
});

export const SupplierProvider = ({ children }) => {
  //localStorage.clear();
  const localSuppliers = JSON.parse(localStorage.getItem('suppliers'));

  const [lines, setSuppliers] = useState(localSuppliers || []);
  const [onLineEdit, setLineEdit] = useState();

  const addLine = supplier => {
    supplier.id = lines.length + 1;
    setSuppliers([...lines, supplier]);
  };

  const editLine = supplier => {
    setSuppliers(
      lines.map(item => (item.id === supplier.id ? supplier : item))
    );
  };

  const deleteLine = supplier => {
    setSuppliers(lines.filter(item => item.id !== supplier.id));
  };

  const toggleLineEdit = (id = '') => setLineEdit(onLineEdit ? '' : id);

  useEffect(() => {
    localStorage.setItem('suppliers', JSON.stringify(lines));
  }, [lines]);

  return (
    <SupplierContext.Provider
      value={{
        lines,
        onLineEdit,
        addLine,
        editLine,
        deleteLine,
        toggleLineEdit,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export default SupplierProvider;
