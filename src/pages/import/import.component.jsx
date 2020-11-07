import React from 'react';

import ImportArea from '../../components/import-area/import-area.component';
import ImportTable from '../../components/import-table/import-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import SupplierSelect from '../../components/supplier-select/supplier-select.component';

import {
  ImportProvider,
  ImportContext,
} from '../../providers/import/import.provider';

import './import.styles.scss';

const ImportContent = () => {
  const {
    handleClickAnalyseButton,
    handleClickValidButton,
    handleClickClearButton,
  } = React.useContext(ImportContext);

  const options = [
    { value: false, label: 'Fournisseur' },
    { value: 'pronatura', label: 'Pro Natura' },
    { value: 'provincebio', label: 'Province Bio' },
    { value: 'new', label: 'Créer nouveau...' },
  ];

  const handleSelectChange = value => {
    console.log(value);
  };

  return (
    <div className='import-page'>
      <div className='import-area-container'>
        <ImportArea />
        <div className='button-container'>
          <SupplierSelect onChange={handleSelectChange} options={options} />
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

const ImportPage = () => {
  return (
    <ImportProvider>
      <ImportContent />
    </ImportProvider>
  );
};

export default ImportPage;
