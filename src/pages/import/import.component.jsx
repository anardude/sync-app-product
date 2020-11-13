import React, { useState, useEffect } from 'react';

import { CSVLink } from 'react-csv';

import ImportArea from '../../components/import-area/import-area.component';
import ImportTable from '../../components/import-table/import-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import SupplierSelect from '../../components/supplier-select/supplier-select.component';
import MappingSelect from '../../components/mapping-select/mapping-select.component';

import { ImportContext } from '../../providers/import/import.provider';

import './import.styles.scss';

const ImportPage = () => {
  const {
    handleClickAnalyseButton,
    handleClickValidButton,
    handleClickClearButton,
  } = React.useContext(ImportContext);

  const data = [
    ['firstname', 'lastname', 'email'],
    ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
    ['Raed', 'Labes', 'rl@smthing.co.com'],
    ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
  ];

  const [csvData, setcsvData] = useState(data);

  const clickValidButton = () => {
    setcsvData(handleClickValidButton() || []);
    //document.querySelector('div[class="csv-button"]').click();
  };

  useEffect(() => {});

  return (
    <div className='import-page'>
      <div className='import-area-container'>
        <ImportArea />
        <div className='button-container'>
          <SupplierSelect />
          <MappingSelect />
          <div className='spacer' />
          <CustomButton onClick={handleClickAnalyseButton}>
            Analyse
          </CustomButton>
          <CustomButton onClick={handleClickClearButton}>Effacer</CustomButton>
          <CustomButton style={{ display: 'none' }} onClick={clickValidButton}>
            Valider
          </CustomButton>
          <CSVLink
            className='custom-button'
            onClick={clickValidButton}
            filename='Export.csv'
            separator=';'
            data={csvData}
          >
            Valider
          </CSVLink>
        </div>
      </div>
      <ImportTable />
    </div>
  );
};
export default ImportPage;
