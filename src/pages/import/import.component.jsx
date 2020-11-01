import React, { useState } from 'react';

import ImportArea from '../../components/import-area/import-area.component';
import ImportTable from '../../components/import-table/import-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { cleanTextFromBlankLines, convertTextToArray } from './import.utils';

import './import.styles.scss';

const ImportPage = () => {
    const fields = [
        'id',
        'name', 
        'country', 
        'price', 
        'weight', 
        'quantity'
    ];

    const [dataArea, setDataArea] = useState('');
    const [dataTable, setDataTable] = useState('');

    return (
        <div className='import-page' >
            <ImportArea 
                dataArea={dataArea} 
                onChange={text => setDataArea(cleanTextFromBlankLines(text))} 
            />
            <div className='button-container'>
                <CustomButton 
                    onClick={() => setDataTable(convertTextToArray(dataArea))}
                >Analyse</CustomButton>
            </div>
            <ImportTable 
                dataTable={dataTable} 
                fields={fields} 
            />
        </div>
    );
}

export default ImportPage;
