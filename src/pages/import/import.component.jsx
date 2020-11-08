import React from 'react';

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
          <CustomButton onClick={handleClickValidButton}>Valider</CustomButton>
        </div>
      </div>
      <ImportTable />
    </div>
  );
};
export default ImportPage;
