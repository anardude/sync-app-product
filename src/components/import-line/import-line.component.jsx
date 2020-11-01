import React from 'react';

import './import-line.styles.scss';

const ImportLine = ({ line }) => {

    const handleChange = (e) => {
        const checked = e.target.checked;
        console.log(checked, line.id);
    }

    //console.log(dataLine);
    return (
        <div className='import-line' >
            <span className='checkbox-cell'><input type='checkbox' onChange={handleChange} /></span>
            <span className='content-field'>{line.data}</span>
            <span className='field-name'><input type='text' defaultValue={line.fieldName} /></span>
        </div>
    );
}

export default ImportLine;
