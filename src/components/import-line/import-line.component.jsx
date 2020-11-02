import React from 'react';

import './import-line.styles.scss';

const ImportLine = ({ line, onCheckboxChange, onFieldChange }) => {
    return (
        <div className='import-line' >
            <span className='checkbox-cell'><input 
                type='checkbox' 
                onChange={(e) => onCheckboxChange(e.target.checked)} 
            /></span>
            <span className='content-field'>{line.data}</span>
            <span className='field-name'><input 
                type='text' 
                defaultValue={line.fieldName}
                onChange={(e) => onFieldChange(e.target.value)}
            /></span>
        </div>
    );
}

export default ImportLine;
