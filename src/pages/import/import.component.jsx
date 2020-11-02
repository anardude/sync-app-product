import React, { useState } from 'react';

import ImportArea from '../../components/import-area/import-area.component';
import ImportTable from '../../components/import-table/import-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { cleanTextFromBlankLines, convertTextToArray, createImportTable } from './import.utils';

import './import.styles.scss';

const ImportPage = () => {

    const baseUrl = 'https://extranet.organic-alliance.com/product/'

    const fields = [
        'code',
        'name', 
        'country', 
        'price', 
        'weight', 
        'quantity'
    ];

    const [tabFields, setTabFields] = useState(fields);
    const [dataArea, setDataArea] = useState('');
    const [dataTable, setDataTable] = useState('');
    const [indexLastField, setIndexLastField] = useState(0);

    const handleCheckboxChange = (c, idx) => {
        c && setIndexLastField(idx);
    }

    const handleFieldChange = (f, idx) => {
        fields[idx] = f; 
        setTabFields(fields);
    }

    const handleClickValidButton = () => {
        const data = createImportTable({dataTable, tabFields, indexLastField, baseUrl});
        console.log(data);
    }

    return (
        <div className='import-page' >
            <ImportArea 
                dataArea={dataArea} 
                onChange={text => setDataArea(cleanTextFromBlankLines(text))} 
            />
            <div className='button-container'>
            <CustomButton 
                onClick={handleClickValidButton}
            >Valider</CustomButton>
            <CustomButton 
                    onClick={() => setDataTable(convertTextToArray(dataArea))}
                >Analyse</CustomButton>
            </div>
            <ImportTable 
                dataTable={dataTable} 
                fields={fields} 
                onCheckboxChange={(c, idx) => handleCheckboxChange(c, idx)}
                onFieldChange={(f, idx) => handleFieldChange(f, idx)}
            />
        </div>
    );
}

export default ImportPage;
