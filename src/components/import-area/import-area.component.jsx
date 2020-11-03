import React from 'react';

import { ImportContext } from '../../providers/import/import.provider';

import './import-area.styles.scss';

const ImportArea = () => {
    const { handleChangeArea, dataArea } = React.useContext(ImportContext);
    return(
        <div className='import-area' >
            <textarea
                onChange={event => handleChangeArea(event.target.value)} 
                value={ dataArea } 
                placeholder='Coller le contenu à importer'
            ></textarea>
        </div>
    );
}

export default ImportArea;
