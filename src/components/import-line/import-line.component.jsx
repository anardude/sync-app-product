import React from 'react';

import { ImportContext } from '../../providers/import/import.provider';

import './import-line.styles.scss';

const ImportLine = ({ idx, line }) => {
    const { handleCheckboxChange, handleFieldChange } = React.useContext(ImportContext);
    return (
        <div className='import-line' >
            <span className='checkbox-cell'><input 
                type='checkbox' 
                onChange={(e) => handleCheckboxChange(e.target.checked, idx)} 
            /></span>
            <span className='content-field'>{line.data}</span>
            <span className='field-name'><input 
                type='text' 
                defaultValue={line.fieldName}
                onChange={(e) => handleFieldChange(e.target.value, idx)}
            /></span>
        </div>
    );
}

export default ImportLine;
