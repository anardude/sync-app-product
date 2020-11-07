export const cleanTextFromBlankLines = textToConvert => {
  return textToConvert.replace(/^\s*[\r\n]/gm, '');
};

export const convertTextToArray = textToConvert => {
  return textToConvert && textToConvert.split(/\r?\n/);
};

export const arrayKeyExist = (table, key) => {
  return table && table[key] && table[key] !== 'undefined' && true;
};

export const createImportTable = ({
  dataTable,
  tabFields,
  indexLastField,
  baseUrl = '',
  codeField = 'code',
}) => {
  if (!dataTable || !tabFields || !indexLastField) return false;
  let tempTab = [];
  let nombreBoucle = 1;
  const newTab = [];

  dataTable.forEach((line, idx) => {
    const indexForLine = idx - (nombreBoucle - 1) * (indexLastField + 1);
    arrayKeyExist(tabFields, indexForLine) && tempTab.push(line);
    if (indexForLine === indexLastField) {
      const tempObj = {};
      tempTab.forEach((f, k) => (tempObj[`${tabFields[k]}`] = f));
      tempObj.url = baseUrl + tempObj[codeField];
      newTab.push(tempObj);
      tempTab = [];
      nombreBoucle++;
    }
  });

  return newTab;
};
