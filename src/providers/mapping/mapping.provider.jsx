import React, { createContext, useState, useEffect } from 'react';

export const MappingContext = createContext({
  lines: [],
  onLineEdit: '',
  getLineById: () => {},
  addLine: () => {},
  editLine: () => {},
  deleteLine: () => {},
  toggleLineEdit: () => {},
});

export const MappingProvider = ({ children }) => {
  //localStorage.clear();
  const localData = JSON.parse(localStorage.getItem('mappings'));

  const [lines, setLines] = useState(localData || []);
  const [onLineEdit, setLineEdit] = useState();

  const getLineById = id => {
    return lines.find(line => line.id.toString() === id.toString());
  };

  const addLine = line => {
    line.id = lines.length + 1;
    if (!Array.isArray(line.fields))
      line.fields = line.fields.replace(/ /g, '').split(',');
    setLines([...lines, line]);
  };

  const editLine = line => {
    const newField = Array.isArray(line.fields)
      ? line.fields
      : line.fields.replace(/ /g, '').split(',');
    const newLine = {
      ...line,
      fields: newField,
    };
    setLines(lines.map(item => (item.id === newLine.id ? newLine : item)));
  };

  const deleteLine = line => {
    setLines(lines.filter(item => item.id !== line.id));
  };

  const toggleLineEdit = (id = '') => setLineEdit(onLineEdit ? '' : id);

  useEffect(() => {
    localStorage.setItem('mappings', JSON.stringify(lines));
  }, [lines]);

  return (
    <MappingContext.Provider
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
    </MappingContext.Provider>
  );
};

export default MappingProvider;
