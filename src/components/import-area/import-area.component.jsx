import React from 'react';

import './import-area.styles.scss';

const ImportArea = ({dataArea, onChange}) => (
    <div className='import-area' >
        <textarea
            onChange={event => onChange(event.target.value)} 
            value={ dataArea } 
            placeholder='Coller le contenu à importer'
        ></textarea>
    </div>
);

export default ImportArea;
