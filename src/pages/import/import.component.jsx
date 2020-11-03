import React from 'react';

import ImportArea from '../../components/import-area/import-area.component';
import ImportTable from '../../components/import-table/import-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { ImportContext } from '../../providers/import/import.provider';

import './import.styles.scss';

const ImportPage = () => {
    const { handleClickAnalyseButton, handleClickValidButton } = React.useContext(ImportContext);
    
    return (
        <div className='import-page' >
            <ImportArea />
            <div className='button-container'>
                <CustomButton onClick={handleClickValidButton} >Valider</CustomButton>
                <CustomButton onClick={handleClickAnalyseButton} >Analyse</CustomButton>
            </div>
            <ImportTable />
        </div>
    );
}

export default ImportPage;
