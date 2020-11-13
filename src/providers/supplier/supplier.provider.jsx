import React, { createContext, useState, useEffect } from 'react';

export const SupplierContext = createContext({
  lines: {},
  onLineEdit: '',
  getLineById: () => {},
  addLine: () => {},
  editLine: () => {},
  deleteLine: () => {},
  toggleLineEdit: () => {},
});

export const SupplierProvider = ({ children }) => {
  //localStorage.clear();
  const localData = JSON.parse(localStorage.getItem('suppliers'));

  const [lines, setLines] = useState(localData || []);
  const [onLineEdit, setLineEdit] = useState();

  const getLineById = id => {
    return lines.find(line => line.id.toString() === id.toString());
  };

  const addLine = line => {
    line.id = lines.length + 1;
    // line.mapping = line.mapping && {
    //   id: line.mapping,
    //   options:
    // }
    setLines([...lines, line]);
  };

  const editLine = line => {
    setLines(lines.map(item => (item.id === line.id ? line : item)));
  };

  const deleteLine = line => {
    setLines(lines.filter(item => item.id !== line.id));
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
        getLineById,
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
