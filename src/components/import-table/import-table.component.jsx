import React from 'react';

import ImportLine from '../import-line/import-line.component';

import { ImportContext } from '../../providers/import/import.provider';

import './import-table.styles.scss';

const ImportTable = () => {
    const { dataTable, tabFields } = React.useContext(ImportContext);
    return (
        <div className='import-table' >
            {dataTable && dataTable.length > 0 && (
                <div>  
                    <div className='import-notice'>Cocher le dernier champ d'une ligne et mettre un nom aux champs à importer</div>
                    {/*<div className='import-line-title' >
                        <span>Dernier</span>
                        <span>Contenu</span>
                        <span>Titre </span>
                    </div>*/}
                    <div className='import-line-body'>
                        {dataTable
                            .filter((dataLine, idx) => idx < 20)
                            .map((dataLine, idx) => {
                                const field = tabFields && idx < tabFields.length && tabFields[idx] !== 'undefined' ? tabFields[idx] : '';
                                const line = {
                                    id: idx,
                                    data: dataLine,
                                    fieldName: field,
                                    checked: false,
                                    fieldValue: ''
                                }
                                return ( 
                                    <ImportLine key={idx} idx={idx} line={line} />
                                )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImportTable;
