import React, { createContext, useState, useEffect } from 'react';

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
  currentMapping: {},
  currentSupplier: {},
  handleChangeArea: () => {},
  handleCheckboxChange: () => {},
  handleSupplierChange: () => {},
  handleMappingChange: () => {},
  handleFieldChange: () => {},
  handleClickValidButton: () => {},
  handleClickAnalyseButton: () => {},
  handleClickClearButton: () => {},
  setIndexLastField: () => {},
});

export const ImportProvider = ({ children }) => {
  const localCurrentMapping =
    JSON.parse(localStorage.getItem('currentMapping')) || {};
  const localCurrentSupplier =
    JSON.parse(localStorage.getItem('currentSupplier')) || {};

  const [currentMapping, setCurrentMapping] = useState(localCurrentMapping);
  const [currentSupplier, setCurrentSupplier] = useState(localCurrentSupplier);
  const [baseUrl, setBaseUrl] = useState(localCurrentSupplier.baseUrl);
  const [tabFields, setTabFields] = useState(currentMapping.fields);
  const [dataArea, setDataArea] = useState('');
  const [dataTable, setDataTable] = useState('');
  const [indexLastField, setIndexLastField] = useState(0);

  const handleChangeArea = text => setDataArea(cleanTextFromBlankLines(text));

  const handleCheckboxChange = (c, idx) => c && setIndexLastField(idx);

  const handleFieldChange = (f, idx) => {
    tabFields[idx] = f;
    setTabFields(tabFields);
  };

  const handleSupplierChange = supplier => {
    setCurrentSupplier(supplier);
    return supplier;
  };

  const handleMappingChange = mapping => {
    setCurrentMapping(mapping);
    setTabFields(mapping.fields);
    return mapping;
  };

  const handleClickAnalyseButton = () => {
    setDataTable([]);
    setDataTable(convertTextToArray(dataArea));
  };

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
    return data;
  };

  useEffect(() => {
    localStorage.setItem('currentMapping', JSON.stringify(currentMapping));
  }, [currentMapping]);

  useEffect(() => {
    setBaseUrl(currentSupplier.baseUrl);
    localStorage.setItem('currentSupplier', JSON.stringify(currentSupplier));
  }, [currentSupplier]);

  return (
    <ImportContext.Provider
      value={{
        tabFields,
        dataArea,
        dataTable,
        indexLastField,
        currentMapping,
        currentSupplier,
        handleChangeArea,
        handleCheckboxChange,
        handleSupplierChange,
        handleMappingChange,
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
