import React, { createContext, useState } from 'react';

import {
  cleanTextFromBlankLines,
  convertTextToArray,
  createImportTable,
} from './import.utils';

export const ImportContext = createContext({
  tabFields: [],
  dataArea: [],
  dataTable: [],
  indexLastField: 0,
  baseUrl: '',
  handleChangeArea: () => {},
  handleCheckboxChange: () => {},
  handleFieldChange: () => {},
  handleClickValidButton: () => {},
  handleClickAnalyseButton: () => {},
  handleClickClearButton: () => {},
  setIndexLastField: () => {},
});

export const ImportProvider = ({ children }) => {
  const fields = ['code', 'name', 'country', 'price', 'weight', 'quantity'];
  const baseUrl = 'https://extranet.organic-alliance.com/product/';

  const [tabFields, setTabFields] = useState(fields);
  const [dataArea, setDataArea] = useState('');
  const [dataTable, setDataTable] = useState('');
  const [indexLastField, setIndexLastField] = useState(0);

  const handleChangeArea = text => setDataArea(cleanTextFromBlankLines(text));

  const handleCheckboxChange = (c, idx) => c && setIndexLastField(idx);

  const handleFieldChange = (f, idx) => {
    fields[idx] = f;
    setTabFields(fields);
  };

  const handleClickAnalyseButton = () =>
    setDataTable(convertTextToArray(dataArea));

  const handleClickClearButton = () => {
    setDataArea('');
    setDataTable([]);
  };

  const handleClickValidButton = () => {
    const data = createImportTable({
      dataTable,
      tabFields,
      indexLastField,
      baseUrl,
    });
    console.log(data);
  };

  return (
    <ImportContext.Provider
      value={{
        tabFields,
        dataArea,
        dataTable,
        indexLastField,
        handleChangeArea,
        handleCheckboxChange,
        handleFieldChange,
        handleClickValidButton,
        handleClickAnalyseButton,
        handleClickClearButton,
        setIndexLastField,
      }}
    >
      {children}
    </ImportContext.Provider>
  );
};

export default ImportProvider;
