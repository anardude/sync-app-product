import React from 'react';

import './custom-select.styles.scss';

function CustomSelect({options, onChange}) {

    const renderOptions = () => options.map((opt, idx) => {
        return <option key={idx} value={opt.value}>{opt.label}</option>;
    })

    return (
        <div className='custom-select'>
            <select onChange={(e) => onChange(e.target.value)}>
                {renderOptions(options)}
            </select>
        </div>
    );
}

export default CustomSelect;
